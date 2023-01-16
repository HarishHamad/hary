import axios from 'axios';
import React, { Component } from 'react'
import withRouter from './withRouter';
import '../App.css'


class AddUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      firstName: '',
      lastName: '',
      loginId: '',
      password: '',
      roleId: '',
      message: '',
      id: '',
    }
    if (this.props.params.id) {
      this.get()
    }
  }

  get() {
    let id = this.props.params.id;
    var url = "http://api.sunilos.com:9080/ORSP10/Auth/get/" + id;

    axios.get(url).then((response) => {
      this.setState({
        firstName: response.data.result.data.firstName,
        lastName: response.data.result.data.lastName,
        loginId: response.data.result.data.loginId,
        password: response.data.result.data.password,
        roleId: response.data.result.data.roleId,
        id: response.data.result.data.id
      });
    });

  }


  reset() {
    this.setState({
      firstName: '',
      lastName: '',
      loginId: '',
      password: '',
      roleId: '',
      message: '',
      data: '',
      toggle: ''
    })
  }
  valid() {
    if (this.state.firstName === "" && this.state.lastName === "" && this.state.loginId === "" && this.state.password === "" && this.state.roleId === "") {
      this.setState({ data: "Enter Your info...!!!" })
    } else if (this.state.firstName === "") {
      this.setState({ data: "Enter FirstName!!!" })
    } else if (this.state.lastName === "") {
      this.setState({ data: "Enter LastName!!!" })
    } else if (this.state.loginId === "") {
      this.setState({ data: "Enter email!!!" })
    } else if (this.state.password === "") {
      this.setState({ data: "Enter Password!!!" })
    } else if (this.state.roleId === "") {
      this.setState({ data: "Enter Role id!!!" })
    } else {
      return true
    }
  }
  submit(event) {
    event.preventDefault();
    this.setState({ data: '' })
    if (this.valid()) {

      let url = "http://api.sunilos.com:9080/ORSP10/User/save";
      axios.post(url, this.state).then((response) => {
        this.setState({ list: response.data.result })
        // console.log(response.data.result)
        alert("User added successfully")

        if (response.data.result.message === "loginId already exists") {
          this.setState({ data: "loginId already exists" })
        } else if (!response.data.success) {
          this.setState({ data: "Please fill correct Role id" })
        } else {
         
          
        }
      })
    }
  }

  render() {
    return (
      <div className='bg'>
        <section className='mt-3'>

          <div className="mask d-flex align-items-center h-50 gradient-custom-3">
            <div className="container h-50 ">
              <div className="row d-flex justify-content-center align-items-center h-50">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card p-5" style={{ borderRadius: '30px', marginBottom: "100px", width: "80%" }}>
                    <h1 className=" d-flex justify-content-center align-items-center">
                      {
                        this.props.params.id ? "EDIT USER" : "ADD USER"
                      }
                    </h1>
                    <div className="card-body ">
                      <form >
                        <table>                      
                            <tr className="form-outline mb-2">
                          <td
                            className="form-label"
                            htmlFor="form3Example1cg"
                          >
                            First Name
                          </td>
                          <td>
                          <input
                            type="text"
                            id="form3Example1cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ firstName: event.target.value }) }}
                            name='firstName'
                            value={this.state.firstName}
                            placeholder="Enter first name"
                          />
                          </td>

                        </tr>
                        <tr className="form-outline mb24">
                          <td
                            className="form-label"
                            htmlFor="form3Example2cg"
                          >
                            Last Name
                          </td>
                          <td>
                          
                          <input
                            type="text"
                            id="form3Example2cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ lastName: event.target.value }) }}
                            name='lastName'
                            value={this.state.lastName}
                            required
                            placeholder="Enter last name"
                          />
                          </td>
                          </tr>

                        

                        <tr className="form-outline mb-2">
                          <td
                            className="form-label"
                            htmlFor="form3Example3cg"
                          >
                            Email id
                          </td>
                          <td>
                          
                          <input
                            type="email"
                            id="form3Example3cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ loginId: event.target.value }) }}
                            name="loginId"
                            value={this.state.loginId}
                            required
                            placeholder="Enter email id"
                          />
                          </td>
                         


                        </tr>

                        <tr className="form-outline mb-2">
                          <td
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Password
                          </td>
                          <td>
                          <input
                            type="password"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ password: event.target.value }) }}
                            name="password"
                            value={this.state.password}
                            placeholder="Enter password"
                          />
                          </td>


                        </tr>

                        <tr className="form-outline mb-2">
                          <td
                            className="form-label"
                            htmlFor="role1"
                          >
                            Role id
                          </td>
                          <input
                            type="role"
                            id="role1"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ roleId: event.target.value }) }}
                            name="roleId"
                            value={this.state.roleId}
                            placeholder="Enter roll id"
                          />
                        </tr>
                        <div style={{ color: "red" }}> <p>{this.state.data}</p></div>
                        <tr className='text-center'>
                          <td colSpan={3}>
                            <button
                              type="btn"
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body "
                              onClick={(event) => { this.submit(event) }}
                            >

                              {
                                this.props.params.id ? "Update" : "AddUser"
                              }
                            </button>
                          </td>
                          </tr>
                          
                          <tr className="text-center">
                            <td colSpan={3}>
                            <button
                              type="reset"
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body "
                              onClick={() => { this.reset() }}
                            >
                              Reset
                            </button>
                            </td>
                          </tr>
                         
                        
                        </table>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default withRouter(AddUser);
