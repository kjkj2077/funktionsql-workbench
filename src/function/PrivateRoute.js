import isLogin from "./isLogin";
import {  Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/Login"/>)}
      />
    );
  };
  
  export default PrivateRoute;