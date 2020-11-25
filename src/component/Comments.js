import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Comments extends Component{
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
                 <nav>
                    <div class="nav-wrapper">
                    <a href="#" class="brand-logo right">Logo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="/">Posts</a></li>
                        <li><a href="/Comments">Comments</a></li>
                        <li><a href="/Album">Albums</a></li>
                        <li><a href="/Photos">Photos</a></li>
                        <li><a href="/Todos">Todos</a></li>
                        <li><a href="/Users">Users</a></li>
                    </ul>
                    </div>
                </nav>

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
export default Comments;