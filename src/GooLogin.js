import * as React from 'react';
import GoogleLogin from 'react-google-login';
const clientId = "831001107036-ci56k1fp2jq41m3a2es9vdtsqbvnfr6u.apps.googleusercontent.com";

function GooLogin(){

    const onSuccess = (res) =>{
        console.log("login success!",res.profileObj);
    }
    const onFailure = (res) =>{
        console.log("login fail!",res);
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
          />
      </div>
  )
}
export default GooLogin