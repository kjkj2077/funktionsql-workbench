import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Login.css';
import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import GooLogin from './function/GooLogin';
import Logging from './function/Logging';
import Footer from './function/Footer';

function Login() {
  const [username,setUsername] =useState("");
  const [password,setPassword] =useState("");

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
      <Footer/> 
    </div>
  );
}
export default Login;

