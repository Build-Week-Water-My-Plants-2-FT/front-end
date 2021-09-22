import React from "react";
import ReactDOM from "react-dom";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer)
console.log(store)

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store ={store}>
  <Router>
    <App />
  </Router>
  </Provider>, rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
