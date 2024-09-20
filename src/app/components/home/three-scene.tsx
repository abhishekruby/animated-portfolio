'use client'

import React, { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage, CameraShake } from '@react-three/drei'
import * as THREE from 'three'
import useSound from 'use-sound'

// Preload the GLTF model to improve performance
useGLTF.preload('/3d-models/deadpool.glb')

type GLTFResult = {
  scene: THREE.Group
}

function Model(props: React.ComponentPropsWithoutRef<'group'>) {
  const { scene } = useGLTF('/3d-models/deadpool.glb') as GLTFResult
  const modelRef = useRef<THREE.Object3D>(null!)
  const [deadPoolSound] = useSound('/sounds/deadpool-sound.mp3')
  const [hasPlayedSound, setHasPlayedSound] = useState(false)

  const handleClick = () => {
    if (!hasPlayedSound) {
      deadPoolSound()
      setHasPlayedSound(true)
    }
  }

  return <primitive ref={modelRef} object={scene} {...props} onClick={handleClick} />
}

export default function ThreeScene() {
  return (
    <Canvas shadows camera={{ fov: 50, position: [10, 0, 0] }}>
      <ambientLight intensity={4} />
      <directionalLight position={[10, 10, 10]} intensity={4} castShadow />
      <Suspense fallback={null}>
        <Stage>
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls enableZoom={false} makeDefault />
      <CameraShake
        maxYaw={0.1}
        maxPitch={0.1}
        maxRoll={0.1}
        yawFrequency={0.1}
        pitchFrequency={0.1}
        rollFrequency={0.1}
        intensity={1}
        decayRate={0.65}
      />
    </Canvas>
  )
}