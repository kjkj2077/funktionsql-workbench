import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Sg.css';
import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import GooSignup from './function/GooSingup';
import Signing from './function/Signing';
import Footer from './function/Footer';

function Sg() {

  const [username,setUsername] =useState('');
  const [password,setPassword] =useState('');
  const [confirm_password,setConfirm_password] =useState('');
  const [sg,setSg]=useState("")

  return (
    <div className='app'>
      <Navbar bg="white" expand="lg" id='nav'>
        <Container className='nav' >
          <Link to="/" style={{ textDecoration: 'none' }}> <Navbar.Brand >FunktionsQL</Navbar.Brand></Link>
        </Container>
      </Navbar>

      <h1 className='login'>회원가입</h1>
      <p className='id'><input type='text' className='i-id' placeholder='이메일' id='username'value={username} onChange={(e) => setUsername(e.target.value)} /></p>
      <p className='pw'><input type='password' className='i-pw' placeholder='비밀번호'id='password' value={password} onChange={(e) => setPassword(e.target.value)}/></p>
      <p className='pw2'><input type='password' className='i-pw2' placeholder='비밀번호 확인'id='confirm_password' value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)} /></p>
      <div className='sg'>{sg}</div>
      <p className='button'><Button variant="outline-secondary" id="loginbtn" onClick={() => Signing(setSg)}>만들기</Button></p>

      <GooSignup />

      <Footer/>
    </div>
  );
}
export default Sg;

