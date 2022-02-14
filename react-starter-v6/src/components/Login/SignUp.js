import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Form from "./Form";

const items = [
  { name: "BLI 1", id: 1 },
  { name: "BLI 2", id: 2 },
  { name: "BLI 3", id: 3 },
];
export default function SignUp(props) {
  return (
    <>
      <Form>
        <label htmlFor="name">Select Bli</label>
        <Dropdown title={"Select Bli"} items={items} />

        <Link to="/dashboard">
          <button className="signup-button">Login</button>
        </Link>
      </Form>
    </>
  );
}
