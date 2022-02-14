import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

export default function Login(props) {
  return (
    <>
      <Form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Type your User Name"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Type your Password"
        />

        <div className="remember">
          <span>
            <input type="checkbox" name="password" /> Remember me
          </span>
          <span>Forgot Password</span>
        </div>

        <Link to="/signup">
          <button className="login-button">Next</button>
        </Link>
      </Form>
    </>
  );
}
