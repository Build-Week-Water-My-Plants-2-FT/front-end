import "./App.css";
import Signup from "./Forms/Signup";
import React, { useState } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import PlantList from './PlantList.js';
import Plant from './Plant'

import AddPlantForm from "./Forms/AddPlantForm";

import Login from "./Forms/Login.js";
import Header from "./Components/Header/Header";

//Initial States //
///////////////////
const initialFormValues = {
  username: "",
  phoneNumber: "",
  password: ""
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };
  
  const submit = evt => {
    evt.preventDefault()
  }
  return (
    <div className="App">
      <Header />
      <h1> HELLO </h1>

      <Switch>

      <Route path ='/plants/add'>
        <AddPlantForm />
      </Route>

      <Route path = '/plants/:id'>
        <Plant />
      </Route>

      <Route path = '/plants'>
        <PlantList />
      </Route>

      <Route path="/login">
        <Login values={formValues} change={change} />
      </Route>

      <Route path="/signup">
        <Signup values={formValues} change={change} submit={submit} />
      </Route>
      
      </Switch>
    </div>
  );
}

export default App;
