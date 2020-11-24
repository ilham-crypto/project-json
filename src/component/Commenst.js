import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Post extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/comments';
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
            <h1>DATA JSON comments</h1>
              <table border="1">
                <tr>
                  <td>PostID</td>
                  <td>ID</td>
                  <td>NAME</td>
                  <td>EMAIL</td>
                  <td>BODY</td>
                </tr>
                {data.map(todo =>
                  <tr hey={todo.id}>
                    <td>{todo.postId}</td>
                    <td>{todo.id}</td>
                    <td>{todo.name}</td>
                    <td>{todo.email}</td>
                    <td>{todo.body}</td>
                  </tr>
                  )}
              </table>
          </div>
        );
      }
    }
export default Post;