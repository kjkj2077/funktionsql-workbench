import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import GooLogin from './GooLogin';
import { gapi } from 'gapi-script';
import Logging from './Logging';

const clientId = "831001107036-ci56k1fp2jq41m3a2es9vdtsqbvnfr6u.apps.googleusercontent.com";

function Login() {
  const [username,setUsername] =useState("");
  const [password,setPassword] =useState("");

 //여기에 저거넣기.

  return (
    <div className='app'>
      <Navbar bg="white" expand="lg" id='nav'>
        <Container className='nav' >
          <Link to="/" style={{ textDecoration: 'none' }}> <Navbar.Brand href="#home">FunktionsQL</Navbar.Brand></Link>
        </Container>
      </Navbar>

      <h1 className='login'>로그인</h1>
      <form>
      <p className='id'><input type='text' className='i-id' placeholder='이메일' id='username' value={username} onChange={(e) => setUsername(e.target.value)} /></p>
      <p className='pw'><input type='password' className='i-pw' placeholder='PASSWORD' id='password' value={password} onChange={(e) => setPassword(e.target.value)} /></p>
      <p className='button'><Button variant="outline-secondary" id="loginbtn" onClick={Logging}>로그인</Button></p>
      <Link to="/sg"><p className='button'><Button variant="outline-secondary" id="loginbtn" >회원가입</Button></p></Link>
      </form>
      <GooLogin />

      <footer >
        <Container>
          <div >
            FunktionsQL<br />
            Copyright © FunktionsQL Corp. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
}
export default Login;

// useEffect(() => {
//   function start() {
//     gapi.client.init({
//       clientId: clientId,
//       scope: ""
//     })
//   }
//   gapi.load('client:auth2', start);
// })
