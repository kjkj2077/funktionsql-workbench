import axios from "axios";

function MakeFunc() {
    const Bearer="Bearer "
    const code = document.getElementById("code");
    const function_name = document.getElementById("function_name");
    const language = document.getElementById("lang_name");

    axios({
        method: "POST",
        headers:{
            Authorization: Bearer+localStorage.getItem("ac-token")
        },
        url: //"http://3.39.83.176:8000/query/databases/"+localStorage.getItem("ac-token")+"/functions",
        "http://3.39.83.176:8000/query/databases/60/functions",
        data: {
            "code": code?.value,
            "function_name": function_name?.value,
            "language": language?.value
        }
    }).then((res) => {
        console.log(res); 
    }).catch(error => {
        console.log(error); 
    });
  }
  export default  MakeFunc;