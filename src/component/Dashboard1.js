import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdOutlineAppRegistration } from "react-icons/md";

export default class Dashboard1 extends Component {
  handleLogout(ev) {
    localStorage.clear();
    window.location.href = "/login";
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
              {
                <ul className="navbar-nav text-center">
                  {!localStorage.token ? (
                    <>
                      <li className="nav-item ">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          <font color="white">
                            <CiHome size={25} /> Home
                          </font>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to="login/">
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
                    </>
                  ) : (
                    <>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <font color="white">Student</font>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/addstudent">
                              Add student
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/studentlist">
                              Student list
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <font color="white">College</font>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/addcollage">
                              Add Collage
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/collagelist">
                              College list
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <font color="white">Marksheet</font>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/addmarksheet">
                              Add Marksheet
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/marksheetlist">
                              Marksheet list
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <font color="white">Role</font>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/addrole">
                              Add Role
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/rolelist">
                              Role list
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <font color="white">User</font>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/adduser">
                              Add User
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/userlist">
                              User list
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="text-light text-nowrap mt-2">
                        {localStorage.getItem("token")}
                      </li>
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
                    </>
                  )}
                </ul>
              }
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
