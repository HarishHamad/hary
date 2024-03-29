import React, { Component } from "react";
import axios from "axios";
import withRouter from "./withRouter";

class AddMarksheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      id: "",
      name: "",
      rollNo: "",
      studentId: "",
      physics: "",
      chemistry: "",
      maths: "",
      toggle: false,
      nameerror: "",
      inputerror: {
        studentId: "",
        chemistry: "",
        maths: "",
        physics: "",
        rollNo: "",
      },
    };

    if (this.props.params.id) {
      this.get();
    }
  }
  get() {
    const url =
      "http://api.sunilos.com:9080/ORSP10/Marksheet/get/" +
      this.props.params.id;
    axios.get(url).then((response) => {
      console.log(response.data.result.data);
      this.setState({
        id: response.data.result.data.id,
        name: response.data.result.data.name,
        rollNo: response.data.result.data.rollNo,
        studentId: response.data.result.data.studentId,
        physics: response.data.result.data.physics,
        chemistry: response.data.result.data.chemistry,
        maths: response.data.result.data.maths,
      });
    });
  }
  reset() {
    this.setState({
      id: "",
      name: "",
      rollNo: "",
      studentId: "",
      physics: "",
      chemistry: "",
      maths: "",
      // data: "",
      toggle: false,
      nameerror: "",
      inputerror: {
        studentId: "",
        chemistry: "",
        maths: "",
        physics: "",
        rollNo: "",
      },
    });
  }
  valid(event) {
    event.preventDefault();
    if (this.state.toggle) {
      // this.setState({ data: "loginId already exists" })
      this.props.showAlert("loginId already exists", "info");
    } else {
      return true;
    }
  }
  submit(event) {
    if (this.valid(event)) {
      event.preventDefault();
      this.setState({
        nameerror: "",
        inputerror: {
          studentId: "",
          chemistry: "",
          maths: "",
          physics: "",
          rollNo: "",
        },
      });
      const url = "http://api.sunilos.com:9080/ORSP10/Marksheet/save";
      axios.post(url, this.state).then((response) => {
        this.setState({ list: response.data.result });
        // console.log(response.data.inputerror)
        alert("Marksheet Added successfully");

        if (response.data.result.inputerror && this.state.name === "") {
          this.setState({
            inputerror: response.data.result.inputerror,
            nameerror: "must not be empty",
          });
          // } else if (this.state.name === "") {
          //   this.setState({ nameerror: "must not be empty" })
        } else if (response.data.result.inputerror) {
          this.setState({ inputerror: response.data.result.inputerror });
        } else if (response.data.success === true) {
          this.setState({ toggle: true });
          this.props.showAlert("Marksheet loaded successfully", "success");
        } else {
          this.setState({ nameerror: " Already exists" });
        }
      });
    }
  }
  render() {
    // console.log(this.props)
    return (
      <div className="bg">
        <section className="mt-3">
          <div className="mask d-flex align-items-center h-50 gradient-custom-3">
            <div className="container h-50" style={{ width: "1000px" }}>
              <div className="row d-flex justify-content-center align-items-center h-50">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="card 1rem!important"
                    style={{ borderRadius: "30px" }}
                  >
                    <h3 style={{ textAlign: "center", marginTop: "40px" }}>
                      {this.props.params.id
                        ? "EDIT MARKSHEET"
                        : "ADD MARKSHEET"}
                    </h3>
                    <div className="card-body p-5">
                      <form>
                        <table>
                          <tr className="form-outline mb-2">
                            <td
                              className="form-label"
                              htmlFor="form3Example1cg"
                            >
                              Name
                            </td>
                            <td>
                              <input
                                type="text"
                                id="form3Example1cg"
                                className="form-control form-control-lg"
                                onChange={(event) => {
                                  this.setState({ name: event.target.value });
                                }}
                                name="name"
                                value={this.state.name}
                                placeholder="Enter first name"
                              />
                            </td>
                            <td>
                              <div style={{ color: "red" }}>
                                {" "}
                                <h6>{this.state.nameerror}</h6>
                              </div>
                            </td>
                          </tr>
                          <tr className="form-outline mb-2">
                            <td
                              className="form-label"
                              htmlFor="form3Example2cg"
                            >
                              Roll number
                            </td>
                            <td>
                              <input
                                type="number"
                                id="form3Example2cg"
                                className="form-control form-control-lg"
                                onChange={(event) => {
                                  this.setState({ rollNo: event.target.value });
                                }}
                                name="rollNo"
                                value={this.state.rollNo}
                                placeholder="Enter roll number"
                              />
                            </td>
                            <td>
                              <div style={{ color: "red" }}>
                                {" "}
                                <h6>{this.state.inputerror.rollNo}</h6>
                              </div>
                            </td>
                          </tr>
                          <tr className="form-outline mb-2">
                            <td
                              className="form-label"
                              htmlFor="form3Example3cg"
                            >
                              Student's id
                            </td>
                            <td>
                              <input
                                type="number"
                                id="form3Example3cg"
                                className="form-control form-control-lg"
                                onChange={(event) => {
                                  this.setState({
                                    studentId: event.target.value,
                                  });
                                }}
                                name="studentId"
                                value={this.state.studentId}
                                placeholder="Enter student id"
                              />
                            </td>
                            <td>
                              <div style={{ color: "red" }}>
                                {" "}
                                <h6>{this.state.inputerror.studentId}</h6>
                              </div>
                            </td>
                          </tr>

                          <tr className="form-outline mb-2">
                            <td
                              className="form-label"
                              htmlFor="form3Example4cg"
                            >
                              Physics
                            </td>
                            <td>
                              <input
                                type="number"
                                id="form3Example4cg"
                                className="form-control form-control-lg"
                                onChange={(event) => {
                                  this.setState({
                                    physics: event.target.value,
                                  });
                                }}
                                name="physics"
                                value={this.state.physics}
                                placeholder="Enter physics mark"
                              />
                            </td>
                            <td>
                              <div style={{ color: "red" }}>
                                {" "}
                                <h6>{this.state.inputerror.physics}</h6>
                              </div>
                            </td>
                          </tr>

                          <tr className="form-outline mb-2">
                            <td
                              className="form-label"
                              htmlFor="form3Example4cg"
                            >
                              Chemistry
                            </td>
                            <td>
                              <input
                                type="number"
                                id="form3Example4cg"
                                className="form-control form-control-lg"
                                onChange={(event) => {
                                  this.setState({
                                    chemistry: event.target.value,
                                  });
                                }}
                                name="chemistry"
                                value={this.state.chemistry}
                                placeholder="Enter chemistry mark"
                              />
                            </td>
                            <td>
                              <div style={{ color: "red" }}>
                                {" "}
                                <h6>{this.state.inputerror.chemistry}</h6>
                              </div>
                            </td>
                          </tr>

                          <tr className="form-outline mb-2 ">
                            <td
                              className="form-label"
                              htmlFor="form3Example4cg"
                            >
                              Mathematics
                            </td>
                            <td>
                              <input
                                type="number"
                                id="form3Example4cg"
                                className="form-control form-control-lg"
                                onChange={(event) => {
                                  this.setState({ maths: event.target.value });
                                }}
                                name="maths"
                                value={this.state.maths}
                                placeholder="Enter maths mark"
                              />
                            </td>
                            <td>
                              <div style={{ color: "red" }}>
                                {" "}
                                <h6>{this.state.inputerror.maths}</h6>
                              </div>
                            </td>
                          </tr>

                          <tr className="text-center">
                            <td colspan={3}>
                              <button
                                type="btn"
                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body "
                                onClick={(event) => {
                                  this.submit(event);
                                }}
                              >
                                {this.props.params.id
                                  ? "Update"
                                  : "Add Marksheet"}
                              </button>
                            </td>
                          </tr>
                          <tr className="text-center mt-2">
                            <td colSpan={3}>
                              <button
                                type="reset"
                                className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body "
                                onClick={() => {
                                  this.reset();
                                }}
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
    );
  }
}
export default withRouter(AddMarksheet);
