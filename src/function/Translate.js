import axios from "axios";

function Translate() {
    const Bearer="Bearer "
    const query_selector = document.getElementById("query_selector"); 
    const function_name = document.getElementById("function_name"); 
    axios({
        method: "POST",
        headers:{
            Authorization: Bearer+localStorage.getItem('ac-token')
        },
        url: "http://15.164.99.115/query/databases/1/execute",
        data: {
            "query_selector": query_selector?.value,
            "function_name": function_name?.value,
                "parameters": {
			        "key1": "value1"
		    }
        }
    }).then((res) => {
        console.log(res); 
    }).catch(error => {
        console.log(error);  
    });
  }
  export default Translate;