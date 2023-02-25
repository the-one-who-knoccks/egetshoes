import { legacy_createStore as createStore } from 'redux'

import { persistStore } from 'redux-persist'
import persistReducers from './persistReducers'
import { rootReducer } from './modules/rootReducer'

const store = createStore(persistReducers(rootReducer))
const persistor = persistStore(store)

export { store, persistor }
