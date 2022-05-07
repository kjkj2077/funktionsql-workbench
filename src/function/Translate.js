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
        url: "http://3.39.83.176:8000/query/databases/1/execute",
        data: {
            "query_selector": query_selector?.value,
            "function_name": function_name?.value,
                "parameters": {
			        "key1": "value1"
		    }
        }
    }).then((res) => {
        console.log(res); 
        console.log(res.data.resopnse);
        window.alert(JSON.stringify(res.data.resopnse).replace(/\"/gi, "") +"결과값");
    }).catch(error => {
        console.log(error);  
        console.error(error.status);
        console.error(error.config);
        console.error(error.response?.data);
    });
  }
  export default Translate;