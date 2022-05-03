import './Translation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Button, Dropdown, CloseButton } from 'react-bootstrap';
import { RotateCw } from 'react-feather';
import { Link, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';


function Translation() {
  const [LoginState, setLoginState] = useState(true);
  return (
    <div className='app'>
      <header>
        <Link to="/" style={{ textDecoration: 'none',color: 'black',fontSize:20 }}>FunktionsQL</Link>
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
            <div className='col-1'>
              <button id='rotatebtn'><RotateCw /></button>
            </div>
            {/* 언어선택1 */}

            <div className='col-6' >
              <div class="dropdown">
                <div className='langselect' >언어선택 ▼</div>
                <div class="dropdown-content">
                  <a class="dropdown-item">java</a>
                  <a class="dropdown-item">c</a>
                  <a class="dropdown-item">swift</a>
                  <a class="dropdown-item">python</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 언어선택2 */}
        <div className="row" >
          <div className="col-6" id='inner'>
            <div contentEditable="true" class='text' placeholder="input something" >
            </div>
            <Button variant="outline-success" id="translate-btn">번역</Button>
          </div>
          <div class="col-6" id='inner'>
            <div contentEditable="true" class='text' placeholder="" id="second-box" ></div>
            <Button variant="outline-success" id="translate-btn">복사</Button>
          </div>
        </div>
      </div>
      {/* 입력창 */}

      <hr />
      <footer >
        <Container>
          <div >
            FunktionsQL<br />
            Copyright © FunktionsQL Corp. All rights reserved.
          </div>
        </Container>
      </footer>
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
export default Translation;