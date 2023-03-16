import axios from "axios";
import React, { Component } from "react";
import withRouter from "./withRouter";
class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      firstName: "",
      lastName: "",
      email: "",
      collegeId: "",
      mobileNo: "",
     
      id: "",
      inputerror: {
        firstName: "",
        lastName: "",
        email: "",
        collegeId: "",
        mobileNo: "",
        id: "",
        
      },
    };
    if (this.props.params.id) {
      this.get();
    }
  }

  get() {
    const url =
      "http://api.sunilos.com:9080/ORSP10/Student/get/" + this.props.params.id;
    axios.get(url).then((res) => {
      console.log(res);
      this.setState({
        firstName: res.data.result.data.firstName,
        lastName: res.data.result.data.lastName,
        email: res.data.result.data.email,
        collegeId: res.data.result.data.collegeId,
        mobileNo: res.data.result.data.mobileNo,
        id: res.data.result.data.id,
        
      });
    });
  }

  reset() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      collegeId: "",
      mobileNo: "",
      id: "",
      inputerror:""
    });
  }
  submit(event) {
    event.preventDefault();
    event.preventDefault();
    const url = "http://api.sunilos.com:9080/ORSP10/Student/save";
    axios.post(url, this.state).then((response) => {
      this.setState({ list: response.data.result });
      // console.log(response.data.inputerror)

      if (response.data.result.inputerror) {
        this.setState({ inputerror: response.data.result.inputerror });

      } else if (response.data.success === true) {
        alert("student save successfully")
        this.setState({ toggle: true });
        this.props.showAlert("Marksheet loaded successfully", "success");
      } else {
        this.setState({ nameerror: " Already exists" });
      }
    });
  }

  render() {
    // console.log( this.props.params.id);
    return (
      <div className="container my-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div
            className="card"
            style={{ borderRadius: "15px", width: "480px" }}
          >
            <div className="card-body p-5">
              <h1>{this.props.params.id ? "EDIT STUDENT" : "ADD STUDENT"}</h1>
              <form>
                <table>
                  <tr className="form-outline mb-4">
                    <td className="form-label" htmlFor="form3Example1cg">
                      First Name
                    </td>
                    <td>
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        placeholder="Enter your First Name"
                        onChange={(event) => {
                          this.setState({
                            firstName: event.target.value,
                          });
                        }}
                        name="firstName"
                        value={this.state.firstName}
                      />
                    </td>
                    <td>
                      <p className="text-danger text-nowrap">{this.state.inputerror.firstName}</p>
                    </td>
                  </tr>
                  <tr className="form-outline mb-4">
                    <td className="form-label" htmlFor="form3Example2cg">
                      Last Name
                    </td>
                    <td>
                      <input
                        type="text"
                        id="form3Example2cg"
                        className="form-control form-control-lg"
                        placeholder="Enter your Last Name"
                        onChange={(event) => {
                          this.setState({
                            lastName: event.target.value,
                          });
                        }}
                        name="lastName"
                        value={this.state.lastName}
                      />
                    </td>
                    <td>
                      <p className="text-danger text-nowrap">{this.state.inputerror.lastName}</p>
                    </td>
                  </tr>

                  <tr className="form-outline mb-4">
                    <td className="form-label" htmlFor="form3Example3cg">
                      Email id
                    </td>
                    <td>
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        placeholder="Enter your EmailId"
                        onChange={(event) => {
                          this.setState({ email: event.target.value });
                        }}
                        name="email"
                        value={this.state.email}
                      />
                    </td>
                    <td>
                      <p className="text-danger text-nowrap">{this.state.inputerror.email}</p>
                    </td>
                  </tr>

                  <tr className="form-outline mb-4">
                    <td className="form-label" htmlFor="form3Example4cg">
                      CollageId
                    </td>
                    <td>
                      <input
                        type="number"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        placeholder="Enter your CollageId"
                        onChange={(event) => {
                          this.setState({
                            collegeId: event.target.value,
                          });
                        }}
                        name="collegeId"
                        value={this.state.collegeId}
                      />
                    </td>
                    <td>
                      <p className="text-danger text-nowrap">{this.state.inputerror.collegeId}</p>
                    </td>
                  </tr>

                 
                 
                  <tr className="form-outline mb-4">
                    <td className="form-label" htmlFor="mobno">
                      Mob Number
                    </td>
                    <td>
                      <input
                        type="number"
                        id="mobno"
                        className="form-control form-control-lg"
                        placeholder="Enter your Mobile Number"
                        onChange={(event) => {
                          this.setState({
                            mobileNo: event.target.value,
                          });
                        }}
                        name="mobileNo"
                        value={this.state.mobileNo}
                      />
                    </td>
                    <td>
                      <p className="text-danger text-nowrap">{this.state.inputerror.mobileNo}</p>
                    </td>
                  </tr>

                  <tr className="text-center">
                    <td colSpan={2}>
                      {" "}
                      <button
                        type="btn"
                        className="btn btn-success text-nowrap mt-3 "
                        onClick={(event) => {
                          this.submit(event);
                        }}
                      >
                        {this.props.params.id
                          ? "UPDATE STUDENT"
                          : "ADD STUDENT"}
                      </button>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td colSpan={2}>
                      <button
                        type="reset"
                        className="btn btn-success "
                        onClick={() => {
                          this.reset();
                        }}
                      >
                        Reset
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-center mt-3">
                      <h1 className="text-success">
                        {this.state.list.success ? (
                          <h6>Data has been Added</h6>
                        ) : null}
                      </h1>
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
export default withRouter(AddStudent);
