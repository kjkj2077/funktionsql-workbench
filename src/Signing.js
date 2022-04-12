import axios from "axios";

function Signing(){
    const username = document.getElementById("username");
    const password = document.getElementById('password')
    const confirm_password =document.getElementById('confirm_password')
    axios({
        method:"POST",
        url: 'http://15.164.99.115/auth/signup/basic',
        data:{
            "username": username?.value,
            "password": password?.value,
            "confirm_password":confirm_password?.value
        }
    }).then((res)=>{
        console.log(res);
    }).catch(error=>{
        console.log(error);
        
    });
}

export default Signing;