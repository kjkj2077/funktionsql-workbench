import './css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from './function/Footer';

function Main() {
  return (
    <div className='app'>
      <header>
        <h3>FunktionsQL</h3>
        <nav>
        <span>{localStorage.getItem("username")}</span>
        </nav>
      </header>
      <div>
        <h1>개발자들을 위해 만들었습니다</h1>
        <h3>필요한 언어를 바로바로 번역하세요.</h3>
        <Link to="/Sg"><Button variant="outline-secondary" id="loginbtn" className='button'>무료로 가입하기</Button></Link>
        <Link id="link" to="/login"><h4>이미 계정이 있으신가요? 로그인</h4></Link>
        <img className="phoneImage" alt="iPhone_01" src="img/trans.png" />
      </div>
      <hr />
      <Footer/>
    </div>
  );
}

export default Main;



