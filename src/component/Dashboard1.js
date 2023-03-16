import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdOutlineAppRegistration } from "react-icons/md";

export default class Dashboard1 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <img alt="rays logo" src={require("./rays.png")} />
              &nbsp; &nbsp;
              <ul className="navbar-nav text-center">
                <li className="nav-item ">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <font color="white">
                      <CiHome size={25} /> Home
                    </font>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    
                    <font color="white">
                      <RiLoginCircleFill size={25} />
                      Login
                    </font>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="registration/">
                    <font color="white">
                      <MdOutlineAppRegistration size={25} />
                      Registration
                    </font>
                  </Link>
                </li>{" "}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
