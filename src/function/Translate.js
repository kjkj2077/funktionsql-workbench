import axios from "axios";

function Translate() {
    const Bearer="Bearer "
    const query_selector = document.getElementById("query_selector"); 
    axios({
        method: "POST",
        headers:{
            Authorization: Bearer+localStorage.getItem('ac-token')
        },
        url: "http://15.164.99.115/query/databases/1/execute",
        data: {
            "query_selector": "RUN",
            "function_name": "my_function",
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