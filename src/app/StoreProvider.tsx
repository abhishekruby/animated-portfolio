'use client'
import React ,{ useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { AppStore, makeStore } from '@lib/store'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  const persistorRef = useRef<any>()

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    const { store, persistor } = makeStore()
    storeRef.current = store
    persistorRef.current = persistor
    // initial state
    // storeRef.current.dispatch(add({email:'test@gmail.com',profile_pic:"test"}))
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current}>
        {children}
      </PersistGate>
    </Provider>
  )
}