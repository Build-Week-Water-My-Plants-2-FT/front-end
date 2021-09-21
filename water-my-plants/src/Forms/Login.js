import React from "react";

function Login(props) {
  const { change, values } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
    console.log(name, value);
  };

  const onSubmit = evt => {
    evt.preventDefault()
    console.log("submitted LogIn Form!", );
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={values.username}
          onChange={onChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={values.phone}
          onChange={onChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={values.passoword}
          onChange={onChange}
          //i heard password shouldnt be stored in the frontend code, but i personally dont know how to do it, so im just using to test that it works :)
        />

        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
