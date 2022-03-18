import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleLogin from "react-google-login";
import './Login.css';
import React,{useState} from 'react';
import { Button ,Container,Navbar} from 'react-bootstrap';

const responseGoogle = response =>{
    console.log(response);
  }

  function Login() {
    return (
      <div className='app'>
        <Navbar bg="white" expand="lg" id='nav'>
            <Container className='nav' >
              <Navbar.Brand href="#home">FunktionsQL</Navbar.Brand>
            </Container>
          </Navbar>
        
          <h1 className='login'>로그인</h1>
           
            <p className='id'><input type='text' className='i-id' placeholder='ID' /></p>
            <p className='pw'><input type='password' className='i-pw' placeholder='PASSWORD' /></p>
            <p className='button'><Button variant="outline-secondary" id="loginbtn">로그인</Button></p>
          
          <GoogleLogin
          clientId="831001107036-ci56k1fp2jq41m3a2es9vdtsqbvnfr6u.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          className="google"
          />
          <footer >
            <Container>
              <div >
                FunktionsQL<br/>
                Copyright © FunktionsQL Corp. All rights reserved.
              </div>
            </Container>
          </footer>
      </div>
    );
  }
  export default Login;