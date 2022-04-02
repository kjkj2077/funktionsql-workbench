import 'bootstrap/dist/css/bootstrap.min.css';
import './Sg.css';
import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import GooLogin from './GooLogin';
import { gapi } from 'gapi-script';

const clientId = "831001107036-ci56k1fp2jq41m3a2es9vdtsqbvnfr6u.apps.googleusercontent.com";

function Sg() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start);
  })

  return (
    <div className='app'>
      <Navbar bg="white" expand="lg" id='nav'>
        <Container className='nav' >
          <Link to="/" style={{ textDecoration: 'none' }}> <Navbar.Brand >FunktionsQL</Navbar.Brand></Link>
        </Container>
      </Navbar>

      <h1 className='login'>회원가입</h1>
      <p className='id'><input type='text' className='i-id' placeholder='이메일' /></p>
      <p className='name'><input type='text' className='i-name' placeholder='이름' /></p>
      <p className='pw'><input type='password' className='i-pw' placeholder='비밀번호' /></p>
      <p className='pw2'><input type='password' className='i-pw2' placeholder='비밀번호확인' /></p>
      <p className='button'><Button variant="outline-secondary" id="loginbtn">만들기</Button></p>

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
export default Sg;