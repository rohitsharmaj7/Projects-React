import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./navbar.styles";

export default function Navbar(props) {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <>
      <Wrapper>
        <div className="nav-left">
          <div className="nav-logo">eCube 3.0</div>
          <div className="nav-links">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/create-project" className="nav-link">
              Create Project
            </Link>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-links">
            <i className="nav-link">BellIcon</i>
            <Link to="/login" className="nav-link">
              Login as Admin
            </Link>
          </div>

          <span className="profile-info">
            <ul>
              <li
                className={`${toggleDropdown === true ? "active" : ""}`}
                onClick={() => {
                  setToggleDropdown(!toggleDropdown);
                }}
              >
                <a href="#">
                  <img
                    src="assets/images/profile_pic.png"
                    height="43px"
                    width="43px"
                  />
                  <p>
                    Rohit Sharma
                    <br />
                    <span>Dev</span>
                  </p>
                  <i className="fas fa-angle-down">&nbsp;*</i>
                </a>

                <div className="dropdown">
                  <ul>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </span>
        </div>
      </Wrapper>
    </>
  );
}
