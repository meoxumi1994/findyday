import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import './index.css'

import reducer from './reducer'
import App from './container/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore( reducer,
  applyMiddleware(thunkMiddleware)
)

store.dispatch({ type: "CHANGE_APP", key: "internet", value: window.navigator.onLine })

window.addEventListener('load', () => {
  window.addEventListener('online',  () => {
    store.dispatch({ type: "CHANGE_APP", key: "internet", value: true })
  })
  window.addEventListener('offline',  () => {
    store.dispatch({ type: "CHANGE_APP", key: "internet", value: false })
  })
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App}/>
      </div>
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));

registerServiceWorker();
