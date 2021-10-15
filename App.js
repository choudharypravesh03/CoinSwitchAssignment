import React from 'react'
import CoinSwitch from './app/app.tsx'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from "redux-thunk";

import rootReducer from './app/redux/reducers'
const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <CoinSwitch />
    </Provider>
    )
}

export default App