import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './App';
import store from './redux/store';
import PathChangeObserver from './components/path-change-observer/path-change-observer';
import reportWebVitals from './reportWebVitals';

import './index.css';

const rootElement = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <PathChangeObserver/>
        <App />
      </Router>
    </Provider>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./App.js', function () {
    setTimeout(render());
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
