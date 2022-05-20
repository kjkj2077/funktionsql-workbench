import axios from "axios";
function Logging(setInformation) {
    const username = document.getElementById("username");
    const password = document.getElementById('password');

    axios({
        method: "POST",
        url: process.env.REACT_APP_AUTH_LOGIN_BASIC,
        data: {
            "username": username?.value,
            "password": password?.value
        }
    }).then((res) => {//성공
        console.log(res);
        console.log(res.response);
        console.log(res.data.refresh_token);
        localStorage.setItem("re-token", res.data.refresh_token);
        localStorage.setItem("ac-token", res.data.access_token);
        localStorage.setItem("username", res.data.username)
        //window.alert(JSON.stringify(res.data.username).replace(/\"/gi, "") + "님 접속 성공");
        document.location.href = '/Translation';

    }).catch(err => {
        if(err.response.status===403){
            setInformation(`잘못된 아이디, 비밀번호입니다.`)
        }else{
            setInformation(`접속불가상태`);
        }
    });
}
export default Logging;