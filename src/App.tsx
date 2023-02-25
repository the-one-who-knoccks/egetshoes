import { Provider } from 'react-redux'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import Header from './components/Header'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
