import React from 'react'
import CoinSwitch from './app/app.tsx'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import rootReducer from './app/redux/reducers'
const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <CoinSwitch />
    </Provider>
    )
}

export default App