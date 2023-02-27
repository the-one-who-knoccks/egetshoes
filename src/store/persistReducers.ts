import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import cartReducer from '../store/modules/cart/reducer'
import { persistStore, persistReducer } from 'redux-persist'

import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import { PersistPartial } from 'redux-persist/es/persistReducer'

const persistConfig = {
  key: 'egetcommerce',
  version: 1,
  stateReconciler: autoMergeLevel2,
  storage,
}

export const rootReducer = combineReducers({ cart: cartReducer })

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer as any,
) as any as typeof rootReducer & PersistPartial

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
