import './css/Translation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import React, { useState, useRef, createContext, useEffect } from 'react';
import Translate from './function/Translate';
import Footer from './function/Footer';
import MakeDB from './function/MakeDB';
import MakeFunc from './function/MakeFunc';
import Logout from './function/Logout';


function Translation() {
  const [code, setCode] = useState("");
  const [query_selector, setQuery_selector] = useState("");
  const [database_name, setDatabase_name] = useState("");
  const [function_name, setFunction_name] = useState("");
  const [result, setResult] = useState("");
  const [language_name, setLanguage_name] = useState("PYTHON")
  const [language, setLanguage] = useState(0);
  const explain = '  1.  DB를 만들고 use {DB 명}을 하세요.\n  2. 코드 입력과 언어 선택 후 Function 만들기 버튼 클릭\n  3. 코드 실행: run {함수명}\n  4. 데이터베이스 내에 있는 함수의 코드를 조회: select {함수명}\n  5. 사용자가 보유중인 모든 데이터베이스의 이름 보기: show databases\n  6. 현재 접속되어 있는 데이터베이스에 등록된 모든 함수의 이름 보기: show functions'
  const explain2 = ' use {DB}, run {Fun}, select {Fun}, show functions, show databases'
  
  const L_copy = async () => { //코드입력창
    await navigator.clipboard.writeText(code);
  }
  const R_copy = async () => { //결과창
    await navigator.clipboard.writeText(result);
  }
  return (
    <div className='app'>
      <header>
        <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>FunktionsQL</Link>
        <nav>
          
          <span className='username'>{localStorage.getItem("username")+" "}</span>
          <Button id="nav_button"variant="outline-dark" onClick={Logout}>로그아웃</Button>
        </nav>
      </header>
      <hr id='hr'/>
      <div className='total'>
        <div className='translate'>
          <div className="row">
            <div className='col-6'>
              <div>
                <div className="dropdown">
                  <div className='langselect'>{language_name}  ▼</div>
                  <div className="dropdown-content">
                    <div className="container">
                      <div className="row align-items-start">
                        <div className="col dropdown-item" onClick={() => {setLanguage_name('PYTHON'); setLanguage(0);}} >PYTHON</div>
                        <div className="col dropdown-item" onClick={() => {setLanguage_name('NODEJS'); setLanguage(1);}} >NODEJS</div>
                        <div className="col dropdown-item" onClick={() => {setLanguage_name('JAVA'); setLanguage(2);}} >JAVA</div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col dropdown-item" onClick={() => {setLanguage_name('RUBY'); setLanguage(3);}} >RUBY</div>
                        <div className="col dropdown-item" onClick={() => {setLanguage_name('GO'); setLanguage(4);}} >GO</div>
                        <div className="col dropdown-item"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'id='inner'>
              <div className="row" id="right_row">
                <div className='col-4'id="DB_INPUT">
                  <input type='text' placeholder=' 데이터베이스 이름' id='database_name' value={database_name} onChange={(e) => setDatabase_name(e.target.value)} ></input>
                </div>
                <div className='col-2' id="DB_BUT">
                <Button variant="outline-dark" id="MAKEDB" onClick={() => {MakeDB(setResult);setDatabase_name("");}}>DB 만들기</Button>
                </div>
                <div className='col-4' id="FUN_INPUT">
                  <input type='text' placeholder=' 함수 이름' id='function_name' value={function_name} onChange={(e) => setFunction_name(e.target.value)} ></input>
                </div>
                <div className='col-2'id="FUN_BUT">
                <Button variant="outline-dark" id="MAKEFUN" onClick={() => {MakeFunc(setResult);setFunction_name("");}}>함수 만들기</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-6" id='inner'>
            <div><textarea className='text1' placeholder={explain} id='code' value={code} onChange={(e) => setCode(e.target.value)} /></div>
            <Button variant="outline-dark" id="translate-btn" onClick={L_copy}>코드 복사</Button>
          </div>
          <div className="col-6" id='inner'>
            <div className="row" id='inner' >
              <div className="col-10" id="QUERY_INPUT">
                <input className='text2' placeholder={explain2} id='query_selector' value={query_selector} onChange={(e) => setQuery_selector(e.target.value)} />
              </div>
              <div className="col-2" id="QUERY_BUTTON">
                <Button variant="outline-dark" id="translate-btn" onClick={() => {Translate(setResult);setQuery_selector("");}}>쿼리 실행</Button>
              </div>
            </div>
            <div className='text3' id="result"  value={result}>{result}</div>
            <Button variant="outline-dark" id="translate-btn" onClick={R_copy}>결과 복사</Button>
          </div>
        </div>
        <input type='text' id='lang_name' value={language} style={{display:'none'}} ></input>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}


export default Translation;