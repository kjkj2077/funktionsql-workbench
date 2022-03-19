import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Button, Dropdown,CloseButton } from 'react-bootstrap';
import { Link,Route,Switch} from 'react-router-dom';
import React from 'react';



function Main() {
    return (
      <div className='app'>
        <Navbar bg="white" expand="lg">
          <Container className='nav' >
            <Navbar.Brand href="#home">FunktionsQL</Navbar.Brand>
          </Container>
        </Navbar>
        {/* nav */}
        <div>
            <h1>개발자들을 위해 만들었습니다</h1>
            <h3>필요한 언어를 바로바로 번역하세요.</h3>
            <Link to="/Sg"><p className='button'><Button variant="outline-secondary" id="loginbtn">무료로 가입하기</Button></p></Link>
            <Link id="link" to="/login"><h4>이미 계정이 있으신가요? 로그인</h4></Link>
            <img className="phoneImage" alt="iPhone_01" src="img/trans.png" />
        </div>
  
        
        <hr/>
        <footer >
          <Container>
            <div >
              FunktionsQL<br/>
              Copyright © FunktionsQL Corp. All rights reserved.
            </div>
          </Container>
        </footer>
        {/* footer */}
      </div>
    );
  }
  export default Main;