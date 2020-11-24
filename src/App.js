import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Post from './component/Post';
import Commenst from './component/Commenst';
import Album from './component/Album';
import Photos from './component/Photos';
import Todos from './component/Todos';
import Users from './component/Users';

function App() {
  return (
   <BrowserRouter>
      <Switch>
          <Link path="/" exact component={Post}/>
          <Link path="/Commenst" component={Commenst}/>
          <Link path="/Album" component={Album}/>
          <Link path="/Photos" component={Photos}/>
          <Link path="/Todos" component={Todos}/>
          <Link path="/Users" component={Users}/>
      </Switch>
   </BrowserRouter>
  );
}

export default App;
