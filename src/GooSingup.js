import * as React from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";
const clientId = REACT_APP_GOOGLE_CLIENTID;

function GooSignup() {
    const onSuccess = (res) => {
    console.log("login success!", res.profileObj);
    axios({
        method:"POST",
        url: REACT_APP_AUTH_SINGUP_SOCIAL,
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