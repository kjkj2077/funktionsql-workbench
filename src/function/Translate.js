import axios from "axios";

function Translate(setResult) {

  const Bearer = "Bearer ";
  const query_selector = document.getElementById("query_selector");
  const function_name = document.getElementById("function_name");
  const database_name = document.getElementById("database_name");

  if(query_selector?.value=="use"){
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: "http://3.39.83.176:8000/query/databases/1/execute",
      data: {
        query_selector: query_selector?.value, //use
        query_target: database_name?.value,
        parameters: {
          key1: "value1",
        },
      },
    })
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("db_id", res.data.response.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  else if(query_selector?.value=="run"){
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: "http://3.39.83.176:8000/query/databases/"+localStorage.getItem("db_id")+"/execute",
      data: {
        query_selector: query_selector?.value, //run
        query_target: function_name?.value,
        parameters: {
          key1: "value1",
        },
      },
    })
      .then((res) => {
        console.log("?", res.data.response);
        setResult(`{ statusCode: ${res.data.response.statusCode}, body:  ${res.data.response.body}}`)
      })
      .catch((error) => {
        console.log(error);
      });

  }else if(query_selector?.value=="select"){
    axios({
      method: "POST",
      headers: { Authorization: Bearer + localStorage.getItem("ac-token") },
      url: "http://3.39.83.176:8000/query/databases/"+localStorage.getItem("db_id")+"/execute",
      data: {
        query_selector: query_selector?.value, //select
        query_target: function_name?.value,
      },
    })
      .then((res) => {
        console.log("res", res);
        
      })
      .catch((error) => {
        console.log(error);
      });

  }else if(query_selector?.value=="update"){
    
  }

}
export default Translate;
