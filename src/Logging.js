import axios from "axios";
import { useHistory } from "react-router-dom";
function Logging(){
    const username = document.getElementById("username");
    const password = document.getElementById('password');
    
    let history = useHistory();
    //history.push('/Translation');
    axios({
        method:"POST",
        url: 'http://15.164.99.115/auth/login/basic',
        data:{
            "username": username?.value,
            "password": password?.value
        }
    }).then((res)=>{//성공
        console.log(res);
        console.log(res.data.refresh_token);
        localStorage.setItem("re-token",res.data.refresh_token);
        localStorage.setItem("ac-token",res.data.access_token);
        window.alert(JSON.stringify(res.data.username).replace(/\"/gi, "")+"님 접속 성공");

    }).catch(error=>{
        console.log(error);
        window.alert("접속실패.");
    });
}
export default Logging;