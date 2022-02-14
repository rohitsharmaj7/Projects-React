import React from "react";
import Wrapper from "./form.styles";

export default function Form({ children }) {
  return (
    <>
      <Wrapper>
        <div className="formContainer">
          <div className="header">eCube 3.0</div>
          <div className="heading">Welcome To eCube 3.0</div>
          <form>{children}</form>
        </div>
      </Wrapper>
    </>
  );
}
