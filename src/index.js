import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware , compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom'


//compose set up
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//store set up
const store = createStore(rootReducer  ,composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
         <Router>
              <App />
         </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


