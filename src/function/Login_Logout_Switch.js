import axios from "axios";
function Login_Logout_Switch() {
    

    axios({
        method: "POST",
        url: process.env.REACT_APP_AUTH_LOGIN_BASIC,
        data: {
            "username": username?.value,
            "password": password?.value
        }
    }).then((res) => {//성공
        console.log(res);
        console.log(res.data.refresh_token);
        localStorage.setItem("re-token", res.data.refresh_token);
        localStorage.setItem("ac-token", res.data.access_token);
        localStorage.setItem("username", res.data.username)
        window.alert(JSON.stringify(res.data.username).replace(/\"/gi, "") + "님 접속 성공");
        document.location.href = '/Translation';

    }).catch(error => {
        console.log(error);
        window.alert("접속실패.");
       
    });
}
export default Login_Logout_Switch;