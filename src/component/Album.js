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