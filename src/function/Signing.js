import axios from "axios";

function Signing(setSg){
    const username = document.getElementById("username");
    const password = document.getElementById('password')
    const confirm_password =document.getElementById('confirm_password')
    axios({
        method:"POST",
        url: process.env.REACT_APP_AUTH_SIGNUP_BASIC,
        data:{
            "username": username?.value,
            "password": password?.value,
            "confirm_password":confirm_password?.value
        }
    }).then((res)=>{
        console.log(res);
        //window.alert(JSON.stringify(res.data.username).replace(/\"/gi, "")+"계정 만들기 성공");
        document.location.href = '/Login';
    }).catch(err=>{
        console.log(err);
        console.log("?",err);
        if(password?.value != confirm_password?.value){
            setSg(`비밀번호와 비밀번호 확인이 틀립니다.`)
        }else if(err.response.status===400){
            setSg(`이미있는 계정입니다.`)
        }else{
            window.alert("계정만들기 실패.");
        }
    });
}

export default Signing;