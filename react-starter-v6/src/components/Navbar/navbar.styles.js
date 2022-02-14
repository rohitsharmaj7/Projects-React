import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  height: 70px;

  /* UI Properties */
  background: #232227 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #0000000d;
  opacity: 1;

  .nav-left {
    display: flex;
    align-items: center;
  }

  .nav-right {
    display: flex;
    align-items: center;
    padding-right: 30px;
  }

  .nav-logo {
    display: inline-block;
    color: white;
    padding-left: 50px;
  }

  .nav-links {
    margin-left: 95.19px;
  }

  .nav-left .nav-link {
    text-align: left;
    font: normal normal medium 16px/20px Roboto;
    letter-spacing: 0px;
    color: #e1e1e2;
    opacity: 1;

    padding-right: 87.36px;
    text-decoration: none;
  }

  .nav-right .nav-link {
    text-align: left;
    font: normal normal medium 16px/20px Roboto;
    letter-spacing: 0px;
    color: #e1e1e2;
    opacity: 1;

    padding-right: 58px;
    text-decoration: none;
  }

  .nav-right .profile-info ul li a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
  }

  .nav-right .profile-info ul li {
    position: relative;
  }

  .nav-right .profile-info ul li .dropdown {
    position: absolute;
    top: 58px;
    right: 0px;
    background: black;
    padding: 10px 25px;
    display: none;
  }
  .nav-right .profile-info ul li .dropdown:before {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid;
    border-color: transparent transparent transparent transparent;
  }

  .nav-right .profile-info ul li.active .dropdown {
    display: block;
  }
`;

export default Wrapper;
