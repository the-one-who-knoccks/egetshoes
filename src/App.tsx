import { Provider } from 'react-redux'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import Header from './components/Header'
import { store, persistor } from './store/persistReducers'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import React from 'react'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
              <Header />
              <Router />
              <GlobalStyle />
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
