import React from 'react'
import HeadText from '../common/head-text'
import ScrollSvg from '../ui/scroll-svg'
import CurvedArrow from '../common/curved-arrow'

function Skill() {
  return (
    <div className='h-[125vh] px-40 py-40 relative'>
      <div className='flex justify-start items-center h-40'>
        <HeadText text='Career' highlight='Essentials' />
      </div>
      <div className='flex justify-center items-center h-full w-full'>

      </div>
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <CurvedArrow from={{ x: 100, y: 100 }} to={{ x: 20, y: 300 }} curvature={0.5} arrowSize={10} direction="left"/>
      </div>
       {/* Scroll Svg */}
       <ScrollSvg/>
    </div>
  )
}

export default Skill