import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class CollageList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      "address": "",
      "city": "",
      "name": "",
      "state": "",
      "phoneNo": "",
      "id": ''
    }
  }
  async update() {
    const url = "http://api.sunilos.com:9080/ORSP10/College/search";
    await axios.post(url, this.state).then((responce) => {
      // console.log(responce.data.result.data)
      // console.log(responce.data.result.data)
      this.setState({ list: responce.data.result.data })
    })
  }
  componentDidMount() {
    this.update()
  }
   delete(key) {
    let url = "http://api.sunilos.com:9080/ORSP10/College/delete/" + key;
    axios.get(url).then((res) => {
      this.update();
    })
  }
  render() {
    return (
      <div className='bg'>
        <h1>LIST OF COLLEGE</h1>
        <hr />
        <form id="sign-in-form" className="text-left text-center">
          <span>
            <input type="text" name="name" placeholder='Search by Name' value={this.state.name}
              onChange={(event) => { this.setState({ name: event.target.value }) }} />
          </span> &nbsp; &nbsp; &nbsp;
          <span>
            <input type="text" name="address" placeholder='Search by City'
              value={this.state.city} onChange={(event) => { this.setState({ city: event.target.value }) }} />
          </span> &nbsp; &nbsp; &nbsp;
          <span className='bg-info'>
            <button type='button' onClick={() => this.update()}>Search</button>
          </span>
        </form>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>#</td>
              <td>College Id's</td>
              <td>College Name</td>
              <td>Phone Number</td>
              <td>Address</td>
              <td>City</td>
              <td>State</td>
              <td colSpan={2}>Operation</td>
            </tr>
          </thead>
          <tbody>
            {this.state.list &&
              this.state.list.map((item, i) => {
                return (
                  <tr key={i}>
                    <td > {i + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phoneNo}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td><Link to={"/addcollage/" + item.id} onClick={() => { this.update() }}>Edit</Link></td>
                    <td><button type='button' onClick={(event) => this.delete(item.id)}>Delete</button></td>
                    

                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}