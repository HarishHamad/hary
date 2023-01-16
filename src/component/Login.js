import axios from "axios";
import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginId: "",
      password: "",
      inputerror: {
        password: "",
        loginId: "",
      },
    };
  }

  submit(event) {
    event.preventDefault();
    const url = "http://api.sunilos.com:9080/ORSP10/Auth/login";
    axios.post(url, this.state).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem("token",response.data.result.data.name)
        console.log(response);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          window.location.href = "/"
        );
      } else {
        console.log(response.data.result.inputerror);
        this.setState({
          inputerror: {
            password: response.data.result.inputerror.password,
            loginId: response.data.result.inputerror.loginId,
          },
        });
      }
    });
  }

  reset() {
    this.setState({
      loginId: "",
      password: "",
      data: "",
      inputerror: {
        password: "",
        loginId: "",
      },
    });
  }

  render() {
    return (
      <div className="bg">
      <div className="center">
        <h1>
          <u>Login</u>
        </h1>
        <form
          onSubmit={(event) => {
            this.submit(event);
          }}
        >
          <div className="txt_field">
            <input
              type="text"
              name="loginId"
              id="email"
              onChange={(event) => {
                this.setState({ loginId: event.target.value });
              }}
              required
            />
            <span></span>
            <label htmlFor="email">Email Id</label>
            <br />

            <p style={{ color: "red" }}>{this.state.inputerror.loginId}</p>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              id="password"
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
              required
            />{" "}
            <br />
            <span></span>
            <label htmlFor="password">Password</label>
            <p style={{ color: "red" }}>{this.state.inputerror.password}</p>
          </div>
          <div>
            <button
              className="button"
              type="submit"
              onClick={(event) => {
                this.submit(event);
              }}
            >
              login
            </button>
          </div>

          <div>
            <button className="button" type="submit">
              <Link id="ll" to="/registration">
                Creat New Account
              </Link>
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
