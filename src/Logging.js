import axios from "axios";

function Logging(){
    const username = document.getElementById("username");
    const password = document.getElementById('password')
    axios({
        method:"POST",
        url: 'http://15.164.99.115/auth/login/basic',
        data:{
            "username": username?.value,
            "password": password?.value
        }
    }).then((res)=>{
        console.log(res);
    }).catch(error=>{
        console.log(error);
        
    });
}
export default Logging;