import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { Reducer, Action } from 'redux'

export default (reducers: Reducer<unknown, Action<any>>) => {
  const persistedReducer = persistReducer(
    {
      key: 'egetcommerce',
      storage,
    },
    reducers,
  )

  return persistedReducer
}
