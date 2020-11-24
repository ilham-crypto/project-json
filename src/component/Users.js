import React, { Component } from 'react';
import * as Mui from '@material-ui/core';


class Users extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }
    
      render(){
        const { data } = this.state;
    
        return(
          <div>
               <center>
                <Mui.ButtonGroup  color="primary" aria-label="outlined primary button group">
                    <Mui.Button  href="/">Post</Mui.Button>
                    <Mui.Button  href="/Commenst">Commenst</Mui.Button>
                    <Mui.Button  href="/Album">Album</Mui.Button>
                    <Mui.Button  href="/Photos">Photos</Mui.Button>
                    <Mui.Button  href="/Todos">Todos</Mui.Button>
                    <Mui.Button  href="/Users">Users</Mui.Button>
                </Mui.ButtonGroup>
               </center> 
            <h1>DATA JSON users</h1>
              <table border="1">
                <tr>
                <td>id</td>
                <td>name</td> 
                <td>username</td>
                <td>email</td> 
                <td>address</td>
                <td>phone</td>
                <td>website</td>
                <td>company</td> 
                </tr>
                {data.map(todo =>
                  <tr hey={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td> 
                <td>{todo.username}</td>
                <td>{todo.email}</td> 
                <td>{todo.address.street}</td>     
                <td>{todo.address.suite}</td>
                <td>{todo.address.city}</td> 
                <td>{todo.address.zipcode}</td>
                <td>{todo.address.geo.lat}</td> 
                <td>{todo.address.geo.lng}</td>
                <td>{todo.phone}</td>
                <td>{todo.website}</td> 
                <td>{todo.company.name}</td>
                <td>{todo.company.catchPhrase}</td>
                <td>{todo.company.bs}</td> 
                  </tr>
                  )}
              </table>
          </div>
        );
      }
    }
export default Users;