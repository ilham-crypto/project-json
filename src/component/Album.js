import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Album extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/albums';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }
    
      render(){
        const { data } = this.state;
    
        return(
          <div>
               <center>
                <Mui.ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Mui.Button  href="/">Post</Mui.Button>
                    <Mui.Button  href="/Commenst">Commenst</Mui.Button>
                    <Mui.Button  href="/Album">Album</Mui.Button>
                    <Mui.Button  href="/Photos">Photos</Mui.Button>
                    <Mui.Button  href="/Todos">Todos</Mui.Button>
                    <Mui.Button  href="/Users">Users</Mui.Button>
                </Mui.ButtonGroup>
               </center> 
            <h1>DATA JSON Albums</h1>
              <table border="1">
                <tr>
                  <td>USER</td>
                  <td>ID</td>
                  <td>TITLE</td>
                </tr>
                {data.map(todo =>
                  <tr hey={todo.id}>
                    <td>{todo.userId}</td>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                  </tr>
                  )}
              </table>
          </div>
        );
      }
    }
export default Album;