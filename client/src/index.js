import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducers/rootReducer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



const store = createStore(reducer, applyMiddleware(thunk));




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
       ,
  
  document.getElementById('root')
);


