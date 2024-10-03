'use client'

import React ,{ useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppStore, makeStore } from '@/src/app/store/store'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  const persistorRef = useRef<any>()

  const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}