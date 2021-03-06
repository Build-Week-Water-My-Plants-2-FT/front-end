import "./App.css";
import Signup from "./Forms/Signup";
import React, { useState } from "react";
import { Route } from "react-router-dom";

import AddPlantForm from "./Forms/AddPlantForm";

import Login from "./Forms/Login.js";
import Header from "./Components/Header/Header";
import PrivateRoute from "./Components/PrivateRoute";

//Initial States //
///////////////////
const initialFormValues = {
  username: "",
  phoneNumber: "",
  password: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="App">
      <Header />
      <h1> HELLO </h1>

      <PrivateRoute path="/addplantform">
        <AddPlantForm />
      </PrivateRoute>

      <Route path="/login">
        <Login values={formValues} change={change} />
      </Route>

      <Route path="/signup">
        <Signup values={formValues} change={change} submit={submit} />
      </Route>
    </div>
  );
}

export default App;
