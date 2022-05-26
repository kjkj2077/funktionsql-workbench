import './css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from './function/Footer';
import isLogin from './function/isLogin';
import Logout from './function/Logout';


function Main() {
  
  
  return (
    <div className='app'>
      <header>
        <h3>FunktionsQL</h3>
        
        <nav>
        <Login_logout_button/>
        </nav>
      </header>
      <div>
        <Login_logout/>
       
        <img className="phoneImage" alt="iPhone_01" src="img/trans.png" />
      </div>
      <hr />
      <Footer/>
    </div>
  );
}

function Login_logout(){
  return(
    <div>
    {isLogin() ? 
    <div>
      <h1>{localStorage.getItem("username")}님 안녕하세요</h1>
      <Link to="/Translation"><Button variant="outline-secondary" id="loginbtn" className='button'>사용하기</Button></Link>
    </div> 
    : <div>
      <h1>개발자들을 위해 만들었습니다</h1>
      <h3>필요한 언어를 바로바로 번역하세요.</h3>
      <Link to="/Sg"><Button variant="outline-secondary" id="loginbtn" className='button'>무료로 가입하기</Button></Link>
      <Link id="link" to="/login"><h4>이미 계정이 있으신가요? 로그인</h4></Link>
      </div>
      }     
      </div>
  )
}

function Login_logout_button(){
  return(
    <div>
    {isLogin() ? 
    <div>
      <Button id="nav_button"variant="outline-dark" onClick={Logout}>로그아웃</Button>
    </div> 
    : <div><Link to="/Login"><Button variant="outline-secondary" id="loginbtn" className='button'>로그인 하기</Button></Link></div>
    }
    </div>
  )
}

export default Main;



