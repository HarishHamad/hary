import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class RoleList extends Component {
    constructor(){
        super();
        this.state={
          list: [],
          name: '',
          discription: '',
          id: "",
          // done: "",
          // inputerror: {
          //   name: '',
          //   discription: ''
          // }

        }
    }
    update() {
      const url = "http://api.sunilos.com:9080/ORSP10/Role/search";
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
      let url = "http://api.sunilos.com:9080/ORSP10/Role/delete/" + key;
      axios.get(url).then((res) => {
        this.update();
      })
    }
  render() {
    return (
      <div className='bg'>
        <h1  >Role List page</h1>
        <Table striped bordered hover>
          <thead>
            <tr >
              <th>#</th>
              <th> Name</th>
              <th>Discription</th>
              <th colSpan='2' cellspacing='15px'>Operation</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.discription}</td>
                    <td> <Link  to={ "/addrole/" + item.id } >Edit</Link></td>
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
