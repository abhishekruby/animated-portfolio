import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileDataSlice from './features/profile-data/profileDataSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, profileDataSlice);

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      profileData: persistedReducer,
    },
  });
  const persistor = persistStore(store);
  return { store, persistor };
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>['store'];
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];