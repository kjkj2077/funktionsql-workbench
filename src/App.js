// eslint-disable
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Route,Switch} from 'react-router-dom';
import React ,{useState}from 'react';
import Translation from './Translation.js';
import Login from './Login.js';
import Main from './Main.js'; 
import Sg from './Sg';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path='/'  >
          <Main/>
         </Route>
       <Route exact path='/sg'  >
          <Sg/>
         </Route>
        <Route exact path='/Login'  >
          <Login/>
         </Route>
        <Route exact path='/Translation'  >
         <Translation/>
        </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
