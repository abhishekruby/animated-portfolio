"use client"
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import profileDataSlice from '@store/features/profile/profileDataSlice';
import allProjectDataSlice from '@store/features/project/allProjectDataSlice';
import projectDataSlice from '@store/features/project/projectDataSlice';
import contributionProjectDataSlice from '@store/features/project/contributionProjectDataSlice';

const rootReducer = combineReducers({
  profileData: profileDataSlice.reducer,
  AllProjectData: allProjectDataSlice.reducer,
  projectData: projectDataSlice.reducer,
  contributionProjectData: contributionProjectDataSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      profileData: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  const persistor = persistStore(store);
  return { store, persistor };
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>['store'];
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
