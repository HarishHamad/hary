import axios from "axios";
import React, { Component } from "react";
import withRouter from "./withRouter";

class AddRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: "",
      discription: "",
      id: "",
      // done: "",
      inputerror: {
        name: "",
        discription: "",
      },
    };
    if (this.props.params.id) {
      this.get();
    }
  }
  get() {
    const url =
      "http://api.sunilos.com:9080/ORSP10/Role/get/" + this.props.params.id;
    axios.get(url).then((response) => {
      console.log(response.data.result.data);
      this.setState({
        name: response.data.result.data.name,
        discription: response.data.result.data.discription,
        id: response.data.result.data.id,
      });
    });
  }
  reset() {
    this.setState({
      name: "",
      discription: "",
      // data: "",
      // done: '',
      inputerror: {
        name: "",
        discription: "",
      },
    });
  }
  submit(event) {
    event.preventDefault();
    this.setState({ data: "", inputerror: { name: "", discription: "" } });
    const url = "http://api.sunilos.com:9080/ORSP10/Role/save";
    axios.post(url, this.state).then((response) => {
      this.setState({ list: response.data.result.data });
      // console.log(response.data)
      alert("Role Added successfully")

      if (response.data.result.inputerror) {
        this.setState({ inputerror: response.data.result.inputerror });
      } else if (response.data.result.message === "name already exists") {
        // this.setState({ done: "Name Already exists" })
        this.props.showAlert("Name Already exists !!!", "info");
      } else if (response.data.result.message) {
        // this.setState({ data: "could not execute this statement please change this description." })
        this.props.showAlert(
          "could not execute this statement please change this description.",
          "danger"
        );
      } else {
        // this.setState({ done: "Success" })
        this.props.showAlert("RoleId loaded successfully !!!", "success");
      }
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="Addbg">
        <div className="_container">
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            {this.props.params.id ? "EDIT ROLL" : "ADD ROLL"}
          </h3>
          <form className="p-4 ">
            <table>
              <tr className="form-group pb-3">
                <td htmlFor="exampleInputEmail1">Name</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    onChange={(event) => {
                      this.setState({ name: event.target.value });
                    }}
                    name="name"
                    value={this.state.name}
                  />
                </td>
                <td>
                  <p style={{ color: "red" }}>{this.state.inputerror.name}</p>
                </td>
              </tr>
              <tr className="form-group pb-3">
                <td htmlFor="exampleInputPassword1">Discription</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter discription"
                    onChange={(event) =>
                      this.setState({ discription: event.target.value })
                    }
                    name="discription"
                    value={this.state.discription}
                  />
                </td>
                <td>
                  <p style={{ color: "red" }}>
                    {this.state.inputerror.discription}
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td colSpan={3}>
                  <button
                    type="btn"
                    className="btn btn-success mt-2"
                    onClick={(event) => {
                      this.submit(event);
                    }}
                  >
                    {this.props.params.id ? "Update" : "Add Role"}
                  </button>
                </td>
              </tr>
              <tr className="text-center">
                <td colSpan={3}>
                  <button
                    type="reset"
                    className="btn btn-success"
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
    );
  }
}
export default withRouter(AddRole);
