import './App.css';
import React from 'react';
import {Route, Link} from 'react-router-dom'
import Login from './Components/Login/Login.js'
import Header from './Components/Header/Header';

function App() {
  
  return (
    <div className="App">

      <Header/>
      <h1> HELLO </h1>
      <Route path="/login">
        <Login/>
      </Route>

    </div>
  );
}

export default App;
