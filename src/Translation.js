import './css/Translation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Button, Dropdown, CloseButton } from 'react-bootstrap';
import { RotateCw } from 'react-feather';
import { Link, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Translate from './function/Translate';
import Footer from './function/Footer';
import MakeDB from './function/MakeDB';

function Translation() {
  const [LoginState, setLoginState] = useState(true);
  const [query_selector, setQuery_selector] = useState("");
  const [database_name,setDatabase_name] =useState("");

  return (
    <div className='app'>
      <header>
        <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>FunktionsQL</Link>
        <nav>
          {LoginState === false ? (<Login />) : (<Logout />)}
        </nav>
      </header>
      {/* nav */}
      <hr id='hr' />
      <div className='total'>
        <div className='translate'>
          <div className="row" >
            <div className='col-5'   >
                <Langchoice/>
            </div>
            <div className='col-1'>
              <button id='rotatebtn'><RotateCw /></button>
            </div>
            {/* 언어선택1 */}

            <div className='col-6' >
              <Langchoice/>
            </div>
          </div>
        </div>
        {/* 언어선택2 */}
        <div className="row" >
          <div className="col-6" id='inner'>
            <div>
              <textarea class='text' placeholder="input something" id='query_selector' value={query_selector}  onChange={(e) => setQuery_selector(e.target.value)}/>
            </div>
            <Button variant="outline-success" id="translate-btn" onClick={Translate}>번역</Button>
          </div>
          <div class="col-6" id='inner'>
            <div>
              <div class='text'  id="second-box">{query_selector}</div>
            </div>
            <Button variant="outline-success" id="translate-btn">복사</Button>
          </div>
        </div>
        <input type='text' placeholder='데이터베이스이름' id='database_name' value={database_name}onChange={(e) => setDatabase_name(e.target.value)} ></input>
        <button onClick={MakeDB}>만들기</button>
      </div>
      {/* 입력창 */}
      <hr />
      <Footer/>
      {/* footer */}
    </div>
  );
}
function Login() {
  return (
    <div>
      <Link to="/login" id="header-sub" style={{ textDecoration: 'none' }}><span>로그인</span></Link>
      <Link to="/sg" id="header-sub" style={{ textDecoration: 'none' }}><span>회원가입</span></Link>
    </div>
  );
}
function Logout() {
  return (
    <div>
      <span>kjkj2077</span><Button variant="outline-success">로그아웃</Button>
    </div>
  );
}



function Langchoice() {
  return (
    <div>
      <div class="dropdown">
      <div className='langselect'>언어선택 ▼</div>
      <div class="dropdown-content">
        <div class="container">
          <div class="row align-items-start">
            <div class="col dropdown-item">c</div>
            <div class="col dropdown-item">java</div>
            <div class="col dropdown-item">swift</div>
          </div>
          <div class="row align-items-center">
            <div class="col dropdown-item">python</div>
            <div class="col dropdown-item">javascript</div>
            <div class="col dropdown-item">node</div>
          </div>
          <div class="row align-items-end">
            <div class="col dropdown-item">jsp</div>
            <div class="col dropdown-item">something</div>
            <div class="col dropdown-item">someone</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Translation;