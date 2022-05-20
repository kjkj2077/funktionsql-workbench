import isLogin from "./isLogin";
import { Link, Route, Switch,Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/" />)}
      />
    );
  };
  
  export default PrivateRoute;