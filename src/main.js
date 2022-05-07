import './css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from './function/Footer';
import Logout2 from './function/Logout2';

function Main() {
  const [LoginState, setLoginState] = useState(true);

  // if(localStorage.getItem("username")===""){
  //   LoginState=true;
  // }else{
  //   LoginState=false;
  // }

  return (
    <div className='app'>
      <header>
        <h3>FunktionsQL</h3>
        <nav>
          {LoginState ===false ?(<Login/>):(<Logout/>)}
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

function Login() {
  return (
    <div>
        <Link to="/login" id="header-sub" style={{ textDecoration: 'none'}}><span>로그인</span></Link>
        <Link to="/sg"  id="header-sub" style={{ textDecoration: 'none'}}><span>회원가입</span></Link> 
    </div>
  );
}
function Logout() {
  return (
    <div>
       <span>{localStorage.getItem("username")}</span><Button onclick={Logout2}variant="outline-success">로그아웃</Button>
    </div>
  );
}
export default Main;



