import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
// import { Route, Routes } from 'react-router';
export default class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      firstName:'',
      lastName:'',
      email:'',
      collegeId:'',
      mobileNo:'',
      id:''
      
    }
  }
 
  
  update() {
    let url = "http://api.sunilos.com:9080/ORSP10/Student/search";
    axios.post(url, this.state).then((res) => {
      this.setState({ list: res.data.result.data })
      // console.error(this.state.list)
    }
    )
  }
  componentDidMount() {
    this.update();
  }
  delete(key) {
    let url = "http://api.sunilos.com:9080/ORSP10/Student/delete/" + key;
    axios.get(url).then((res) => {
      this.update();
    })
  }
  render() {
    return (
      <div className=' bg'>
          <h1  >Student List page</h1>
     
        <Table striped bordered hover>
          <thead>
            <tr >
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email id's</th>
              <th>Collage id's</th>
              <th>Mobile No.</th>
              <th colSpan={2}>Operation</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{i+1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.collegeId}</td>
                    <td>{item.mobileNo}</td>
                    <td> <Link  to={ "/addstudent/" + item.id } >Edit</Link>
                    </td>
                    <td>
                        <button onClick={() => this.delete(item.id)}>Delete</button>
                    </td>
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