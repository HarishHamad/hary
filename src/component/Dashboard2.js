import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "../App";

export default class Dashboard2 extends Component {
  handleLogout(ev) {
     localStorage.clear();
     window.location.href = "/login";

    <React.StrictMode>
      <App />
    </React.StrictMode>;
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <img alt="rays logo" src={require("./rays.png")} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <font color="white">Student</font>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="addstudent/">
                        Add Student
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="studentlist/">
                        Student List
                      </Link>
                    </li>
                  </ul>
                </li>
                &nbsp;&nbsp;
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <font color="white">Collage</font>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="addcollage/">
                        Add Collage
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="collagelist/">
                        Collage List
                      </Link>
                    </li>
                  </ul>
                </li>
                &nbsp;&nbsp;
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <font color="white">Marksheet</font>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="addmarksheet/">
                        Add Marksheet
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="marksheetlist/">
                        Marksheet List
                      </Link>
                    </li>
                  </ul>
                </li>
                &nbsp;&nbsp;
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <font color="white">Role</font>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="addrole/">
                        Add Role
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="rolelist/">
                        Role List
                      </Link>
                    </li>
                  </ul>
                </li>
                &nbsp;&nbsp;
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <font color="white">User</font>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="adduser/">
                        Add User
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="userlist/">
                        User List
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="text-light text-nowrap mt-2"></li>
                <li className="d-flex logout">
                  <button
                    onClick={(ev) => {
                      this.handleLogout(ev);
                    }}
                    className="btn btn-primary rounded-3"
                  >
                    Logout
                  </button>
                </li>{" "}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
