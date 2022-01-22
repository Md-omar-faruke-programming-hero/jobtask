import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
     <BrowserRouter>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
