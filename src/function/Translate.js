import axios from "axios";

function Translate(setResult) {
  const Bearer = "Bearer ";
  const query_selector = document.getElementById("query_selector");
  const arr = query_selector?.value.split(" ");

  if (arr[0] == "use") { // 해당데이터베이스 정보 반환
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: process.env.REACT_APP_QUERY_DATABASES_EXECUTE,
      data: {
        query_selector: arr[0], //use
        query_target: arr[1].substring(1, arr[1].length - 1),
      },
    })
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("id", res.data.response.id)
        setResult(`성공적으로 use ${arr[1]}를 했습니다.`)
      })
      .catch((error) => {
        console.log(error);
        setResult(`use 오류`)
      });
  }

  else if (arr[0] == "run") { //함수 실행쿼리
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: "http://3.39.83.176:8000/query/execute",
      data: {
        query_selector: arr[0], //run
        query_target: arr[1].substring(1, arr[1].length - 1),
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
        setResult(res.data.response)
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setResult(`먼저 use {DB}를 해주세요.`)
        } else {
          setResult(`접속불가상태`);
        }
      });

  } else if (arr[0] == "select") { //데이터베이스내애 함수 코드 조회
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: "http://3.39.83.176:8000/query/execute",
      data: {
        query_selector: arr[0], //select
        query_target: arr[1].substring(1, arr[1].length - 1),
        database_id: localStorage.getItem("id")
      },
    })
      .then((res) => {
        console.log("res", res);
        setResult(`${res.data.response}`)
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setResult(`먼저 use {DB}를 해주세요.`)
        } else {
          setResult(`접속불가상태`);
        }
      });

  } else if (query_selector?.value == "show databases") { //사용자가 보유중인 데이터베이스이름을 리스트형태로 반환
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: "http://3.39.83.176:8000/query/execute",
      data: {
        query_selector: arr[0], //show databases
        query_target: arr[1],
      },
    })
      .then((res) => {
        if (res.data.response == '') {
          setResult('생성한 데이터베이스가 아직없습니다.') //feedback
        } else {
          setResult(`${res.data.response}`)
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        setResult(`show databases 오류`)
      });
  } else if (query_selector?.value == "show functions") { //사용자가 보유중인 함수이름을 리스트형태로 반환
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
        if (error.response.status === 400) {
          setResult(`먼저 DB를만들고 use {DB}를 해주세요.`)
        } else {
          setResult(`접속불가상태`);
        }
      });
  }
  else {
    setResult(`쿼리를 다시확인해보세요.`)
  }
}
export default Translate;
