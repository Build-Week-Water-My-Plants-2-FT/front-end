import "./App.css";
import Signup from "./Forms/Signup";
import React, {useState} from 'react';
import {Route, Link} from 'react-router-dom'
import Login from './Components/Login/Login.js'
import Header from './Components/Header/Header';


//Initial States //
  ///////////////////
  const initialFormValues = {
    username: '',
    phoneNumber: ''
    
  }

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)

  const change = (name, value) => {
    setFormValues({...formValues, [name]: value 
    })
  }
  return (
    <div className="App">
      <Signup />
      <Header/>
      <h1> HELLO </h1>
      <Route path="/login">
        <Login 
        values={formValues}
        change={change}
         />
      </Route> 
    </div>
  );
}

export default App;
