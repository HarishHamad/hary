import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

export default class Registration extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      firstName: "",
      lastName: "",
      loginId: "",
      password: "",
      roleId: "",
      epassword: "",
      agree: true,
      inputerror: {
        lastName: "",
        firstName: "",
        loginId: "",
        roleId: "",
      },
    };
    
  }
  componentDidMount() {
    axios.post("http://api.sunilos.com:9080/ORSP10/Role/search", this.state).then((res) => {
      
      this.setState({ list: res.data.result.data });
      console.log(this.state.list);
      })
  }

  reset() {
    this.setState({
      firstName: "",
      lastName: "",
      loginId: "",
      password: "",
      roleId: "",
      agree: true,
      epassword: "",
      inputerror: {
        lastName: "",
        firstName: "",
        loginId: "",
        roleId: "",
      },
    });
  }
  register(event) {
    event.preventDefault();
    this.setState({
      epassword: "",
      inputerror: {
        lastName: "",
        firstName: "",
        loginId: "",
        roleId: "",
      },
    });
    const url = "http://api.sunilos.com:9080/ORSP10/User/save";
    axios.post(url, this.state).then((response) => {
     
      if (response.data.result.inputerror) {
        this.setState({ inputerror: response.data.result.inputerror });
      } else if (this.state.password === "") {
        this.setState({ epassword: "must not be empty" });
      } else if (response.data.result.message) {
        this.props.showAlert(response.data.result.message, "info");
      } else if (response.data.success) {
        window.location.href = "/login";
      } else {
        this.props.showAlert("Role id incorrect", "danger");
      }
    });
  }

   mouseEnter = (event)=>{
    this.setState({roleId:event.target.value})
  }

  render() {
    return (
      <div className="bg d-flex justify-content-center my-5">
        <div className="  col-xl-6 ">
          <div className="card" style={{ borderRadius: "20px" }}>
            <div className="card-body">
              <h2 className="text-uppercase text-center mt-10">
                Create an account
              </h2>
              <form className="d-flex justify-content-center">
                <table>
                  <tr className="form-outline mb-1">
                    <td
                      className="form-label w-25 text-nowrap"
                      htmlFor="form3Example1cg"
                    >
                      First Name
                    </td>
                    <td>
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-sm"
                        onChange={(event) => {
                          this.setState({ firstName: event.target.value });
                        }}
                        placeholder="Enter first name"
                      />
                    </td>
                    <p className="form-label text-nowrap" style={{ color: "red" }}>
                      {this.state.inputerror.firstName}
                    </p>
                  </tr>
                  <tr className="form-outline mb-1">
                    <td
                      className="form-label text-nowrap"
                      htmlFor="form3Example2cg"
                    >
                      Last Name
                    </td>
                    <td>
                      <input
                        type="text"
                        id="form3Example2cg"
                        className="form-control form-control-sm"
                        onChange={(event) => {
                          this.setState({ lastName: event.target.value });
                        }}
                        placeholder="Enter last name"
                      />
                    </td>
                    <p style={{ color: "red" }}>
                      {this.state.inputerror.lastName}
                    </p>
                  </tr>
                  <tr className="form-outline mb-1">
                    <td
                      className="form-label text-nowrap"
                      htmlFor="form3Example3cg"
                    >
                      Login id
                    </td>
                    <td>
                      <input
                        type="loginId"
                        id="form3Example3cg"
                        className="form-control form-control-sm"
                        onChange={(event) => {
                          this.setState({ loginId: event.target.value });
                        }}
                        name="loginId"
                        placeholder="Enter login id"
                      />
                    </td>
                    <p style={{ color: "red" }}>
                      {this.state.inputerror.loginId}
                    </p>
                  </tr>
                  <tr className="form-outline mb-1">
                    <td className="form-label" htmlFor="form3Example4cg">
                      Password
                    </td>
                    <td>
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-sm"
                        onChange={(event) => {
                          this.setState({ password: event.target.value });
                        }}
                        name="password"
                        placeholder="Enter password"
                      />
                    </td>
                    <p style={{ color: "red" }}>{this.state.epassword}</p>
                  </tr>
                  <tr className="form-outline mb-1">
                    <td className="form-label" htmlFor="form3Example6cg">
                      Role Id
                    </td>
                    <td>
                      <label for="cars">select role ID:</label>

                      <>
                        <select id="cars" onMouseEnter={this.mouseEnter}>
                          <option value="Please select name">Name</option>
                          {
                            this.state.list.map((item)=>{
                              return(
                          <option value={item.id}>{item.name}</option>

                              )
                            })
                          }
                        </select>
                      </>

                      <input
                        type="roleId"
                        id="form3Example6cg"
                        className="form-control form-control-sm"
                        
                        value={this.state.roleId}
                       
                        placeholder="Enter roll id"
                      />
                    </td>
                    <p style={{ color: "red" }}>
                      {this.state.inputerror.roleId}
                    </p>
                  </tr>
                  <tr className="text-center">
                    <td colSpan={3}>
                      <button
                        type="button"
                        className="btn btn-success text-center "
                        onClick={(event) => {
                          this.register(event);
                        }}
                      >
                        Register
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-center">
                      <button
                        type="reset"
                        className="btn btn-success text-center "
                        onClick={() => {
                          this.reset();
                        }}
                      >
                        Reset
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-center">
                      <p className="text-center text-muted mt-1 mb-0">
                        Have already an account?{" "}
                        <Link to="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
                      </p>
                    </td>
                  </tr>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
