import axios from "axios";

function Translate(setResult) {
  const Bearer = "Bearer ";
  const query_selector = document.getElementById("query_selector");
  const arr= query_selector?.value.split(" "); 
  
  if(arr[0]=="use"){ // 해당데이터베이스 정보 반환
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: process.env.REACT_APP_QUERY_DATABASES_EXECUTE,
      data: {
        query_selector: arr[0], //use
        query_target: arr[1].substring(1,arr[1].length-1),
      },
    })
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("id", res.data.response.id)
        setResult(res.data.response.id)
      })
      .catch((error) => {
        console.log(error);  
        setResult(`use 오류`)
      });
  }

  else if(arr[0]=="run"){ //함수 실행쿼리
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: "http://3.39.83.176:8000/query/execute",
      data: {
        query_selector:  arr[0], //run
        query_target: arr[1].substring(1,arr[1].length-1),
        database_id: localStorage.getItem("id"),
        parameters: {
          key1: "value1",
        },
      },
    })
      .then((res) => {
        console.log("?", res);
        console.log("?", res.data.response);
        //setResult(`{ statusCode: ${res.data.response.statusCode}, body:  ${res.data.response.body}}`)
        setResult(`id: ${res.data.response}`)
      })
      .catch((error) => {
        console.log(error);
        setResult(`run 오류`)
      });

  }else if(arr[0]=="select"){ //데이터베이스내애 함수 코드 조회
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: "http://3.39.83.176:8000/query/execute",
      data: {
        query_selector:  arr[0], //select
        query_target: arr[1].substring(1,arr[1].length-1),
        database_id: localStorage.getItem("id")
      },
    })
      .then((res) => {
        console.log("res", res); 
        setResult(`${res.data.response}`)   
      })
      .catch((error) => {
        console.log(error);
        setResult(`select 오류`)
      });

  }else if(query_selector?.value=="show databases"){ //사용자가 보유중인 데이터베이스이름을 리스트형태로 반환
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: "http://3.39.83.176:8000/query/execute",
      data: {
        query_selector:arr[0], //show databases
        query_target:arr[1],
      },
    })
      .then((res) => {
        console.log(res);
        setResult(`${res.data.response}`) 
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        setResult(`show databases 오류`)
      });
  }else if(query_selector?.value=="show functions"){ //사용자가 보유중인 함수이름을 리스트형태로 반환
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: "http://3.39.83.176:8000/query/execute",
      data: {
        query_selector: arr[0], //show functions
        query_target: arr[1],
        database_id: localStorage.getItem("id"),
      },
    })
      .then((res) => {
        console.log("?", res.data.response);
        console.log("?", res);
        setResult(`${res.data.response}`) 
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        setResult(`show functions 오류`)
      });
  }
  else{
    setResult(`쿼리를 다시확인해보세요.`) 
  }
}
export default Translate;
