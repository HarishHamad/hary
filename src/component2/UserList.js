import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      firstName:'',
      lastName:'',
      loginId:'',
      password:'',
      roleId:'',
      id:''
    }
  }
 
  
  update() {
    let url = "http://api.sunilos.com:9080/ORSP10/User/search";
    axios.post(url, this.state).then((res) => {
      this.setState({ list: res.data.result.data })
      console.warn(this.state.list)
    }
    )
  }
  componentDidMount() {
    this.update();
  }
  delete(key) {
    let url = "http://api.sunilos.com:9080/ORSP10/User/delete/" + key;
    axios.get(url).then((res) => {
      this.update();
    })
  }
  render() {
    return (
      <div className='bg'>
        <h1  >User List page</h1>
        <Table striped bordered hover>
          <thead>
            <tr >
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email id's</th>
              <th>Role id's</th>
              <th colSpan='2' cellspacing='15px'>Operation</th>
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
                    <td>{item.loginId}</td>
                    <td>{item.roleId}</td>
                    <td> <Link  to={ "/adduser/" + item.id } >Edit</Link></td>
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
