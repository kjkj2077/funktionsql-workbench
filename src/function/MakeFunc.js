import axios from "axios";
function MakeFunc() {
    const Bearer="Bearer "
    const code = document.getElementById("code");
    const function_name = document.getElementById("function_name");
    axios({
        method: "POST",
        headers:{
            Authorization: Bearer+localStorage.getItem("ac-token")
        },
        url: "http://15.164.99.115/query/databases/1/functions",
        data: {
            "code": code?.value,
            "function_name": function_name?.value,
            "language": 0
        }
    }).then((res) => {
        console.log(res); 
    }).catch(error => {
        console.log(error);  
    });
  }
  export default  MakeFunc;