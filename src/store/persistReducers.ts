import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import cartReducer from '../store/modules/cart/reducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { PersistPartial } from 'redux-persist/es/persistReducer'

const persistConfig = {
  key: 'egetcommerce',
  version: 1,
  storage,
}

export const rootReducer = combineReducers({ cart: cartReducer })

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer as any,
) as any as typeof rootReducer & PersistPartial

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
