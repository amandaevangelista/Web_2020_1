import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from './utils/Firebase'
import FirebaseContext from './utils/FirebaseContext'


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import reduxThunk from 'redux-thunk'

import reducer from './store/reducers'


const store = createStore(
  reducer,
  {},
  applyMiddleware(reduxThunk)
)

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch
}



ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <FirebaseContext.Provider value={new firebase()}>
        <App />
      </FirebaseContext.Provider>,
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
