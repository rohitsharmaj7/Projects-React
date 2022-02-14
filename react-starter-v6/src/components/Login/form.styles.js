import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1920px;
  height: 100vh;

  /* UI Properties */
  background: #ecedee 0% 0% no-repeat padding-box;
  opacity: 1;

  .formContainer {
    width: 641px;
    height: 645px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 6px #0000001a;
    border-radius: 10px;
    opacity: 1;
    box-sizing: border-box;

    padding: 49px 55px 59px 54px;
    position: relative;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92px;
    margin-bottom: 54px;

    font: normal normal medium 33px/50px Poppins;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
  }

  .heading {
    margin-bottom: 62px;
    font: normal normal medium 30px/20px Roboto;
    letter-spacing: 0px;
    color: #000000dd;
    opacity: 1;
  }

  label {
    font-weight: bold;
    display: flex;
    margin-bottom: 10px;
  }

  input[type="text"],
  input[type="password"] {
    width: 532px;
    height: 40px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #b8b8b8;
    border-radius: 3px;
    opacity: 1;
    margin-bottom: 10px;
    padding-left: 19px;
  }

  .login-button {
    width: 532px;
    height: 40px;
    /* UI Properties */
    background: #1f7cb5 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    color: white;
    position: absolute;
    bottom: 79px;
  }

  .signup-button {
    width: 532px;
    height: 40px;
    /* UI Properties */
    background: #1f7cb5 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    color: white;
    position: absolute;
    bottom: 79px;
  }

  .remember {
    display: flex;
    justify-content: space-between;
  }

  select {
    width: 532px;
    height: 40px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #b8b8b8;
    border-radius: 3px;
    opacity: 1;
  }
`;

export default Wrapper;
