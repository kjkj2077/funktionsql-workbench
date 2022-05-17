import axios from "axios";

function MakeDB() {
    const database_name = document.getElementById("database_name");
    const Bearer="Bearer "
    axios({
        method: "POST",
        headers:{
            Authorization: Bearer+localStorage.getItem("ac-token")
        },
        url: process.env.REACT_APP_QUERY_DATABASES_MAKE,
        data: {
            "database_name": database_name.value
        }
    }).then((res) => {
        console.log(res); 
    }).catch(error => {
        console.log(error); 
        console.log(error.response);
    });
  }
  export default  MakeDB;