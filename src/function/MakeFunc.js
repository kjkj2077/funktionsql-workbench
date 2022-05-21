import axios from "axios";

function MakeFunc(setResult) {
    const Bearer="Bearer "
    const code = document.getElementById("code");
    const function_name = document.getElementById("function_name");
    const language = document.getElementById("lang_name");

    const arr2 = function_name?.value.split(" ");
    
    axios({
        method: "POST",
        headers:{
            Authorization: Bearer+localStorage.getItem("ac-token")
        },
        url: process.env.REACT_APP_QUERY_DATABASES_FUNCTIONS+localStorage.getItem("id")+"/functions",
        data: {
            "code": code?.value,
            "function_name": function_name?.value,
            "language": language?.value
        }
    }).then((res) => {
        console.log(res.response);
        setResult(`성공적으로 함수 ${arr2[0]} 만들었습니다.`)
    }).catch(error => {
        if (error.response.status === 422) {
            setResult('사용하실 데이터베이스를 먼저 선택해주세요.')
          } else {
            setResult(`함수 만들기 실패`);
          }
    });
  }
  export default  MakeFunc;