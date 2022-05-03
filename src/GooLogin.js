import * as React from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";
const clientId = "831001107036-ci56k1fp2jq41m3a2es9vdtsqbvnfr6u.apps.googleusercontent.com";

function GooLogin(){
    const onSuccess = (res) =>{
        console.log("login success!",res.profileObj);
        axios({
            method:"POST",
            url: 'http://15.164.99.115/auth/login/social',
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
            window.alert(JSON.stringify(res.data.username).replace(/\"/gi, "")+"님 접속 성공");
            document.location.href = '/Translation';
        }).catch(error=>{
            console.log(error);
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