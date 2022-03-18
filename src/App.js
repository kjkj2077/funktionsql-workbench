// eslint-disable
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Route,Switch} from 'react-router-dom';
import React ,{useState}from 'react';
import Translation from './Translation.js';
import Login from './Login.js';

function App() {
  return (
    <div>
       <Route exact path='/'  >
          메인사이트야.
         </Route>
        <Route exact path='/Login'  >
          <Login/>
         </Route>
        <Route exact path='/Translation'  >
         <Translation/>
        </Route>
      </div>
  );
}

export default App;
