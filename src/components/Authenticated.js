import  React  from 'react';
import { Redirect } from 'react-router-dom';
const Authenticated=()=>{
    if(localStorage.getItem("token")==null)
    return <Redirect to="/login" />
    else
    return <Redirect to="/" />
}
export default Authenticated