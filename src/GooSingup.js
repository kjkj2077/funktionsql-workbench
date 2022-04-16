import * as React from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";
const clientId = "831001107036-ci56k1fp2jq41m3a2es9vdtsqbvnfr6u.apps.googleusercontent.com";
function GooSignup() {
    const onSuccess = (res) => {
    console.log("login success!", res.profileObj);
    axios({
        method:"POST",
        url: 'http://15.164.99.115/auth/signup/social',
        data:{
            "username": res.profileObj.email,
            "password": "",
            "auth_key": res.profileObj.googleId,
            "auth_type": 1
        }
    }).then((res)=>{
        console.log(res);
    }).catch(error=>{
        console.log(error);
    });
    }
    const onFailure = (res) => {
        console.log("login fail!", res);
    }
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                className='google'
                buttonText='Register with Google'
            />
        </div>
    )
}
export default GooSignup;