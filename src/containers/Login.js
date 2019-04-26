import React from "react";
import useForm from "../components/useForm";
import { Auth } from "aws-amplify";
import "./Login.css";

function Login(props) {
  const { values, handleChange, handleSubmit } = useForm(login);

  async function login() {
    try {
      await Auth.signIn(values.user, values.password);
      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User
          <input
            name="user"
            type="text"
            value={values.user}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
