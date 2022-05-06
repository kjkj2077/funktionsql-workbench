import * as React from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";


const clientId = process.env.REACT_APP_GOOGLE_CLIENTID;
function GooLogin(){
    
    const onSuccess = (res) =>{
        console.log("login success!",res.profileObj);
        axios({
            method:"POST",
            url: process.env.REACT_APP_AUTH_LOGIN_SOCIAL,
            data:{
                "username": res.profileObj.email,
                "password": "",
                "auth_key": res.profileObj.googleId,
                "auth_type": 1
            }
        }).then((res)=>{
            console.log(res);
            console.log(res.data.refresh_token);
            localStorage.setItem("re-token",res.data.refresh_token);
            localStorage.setItem("ac-token",res.data.access_token);
            localStorage.setItem("username",res.data.username);
            window.alert(JSON.stringify(res.data.username).replace(/\"/gi, "")+"님 접속 성공");
            document.location.href = '/Translation';
        }).catch(error=>{
            console.log(error);
            window.alert("접속실패.");
        });
    }
    const onFailure = (res) =>{
        console.log("login fail!",res);
        window.alert("로그인 실패.");
    }
   
  return(
      <div>
          <GoogleLogin
              clientId={clientId}
              onSuccess={onSuccess}   
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              className='google'
              buttonText='Continue with Google'
          />
      </div>
  )
}
export default GooLogin;