import axios from 'axios';
import { successAlert } from './../components/layouts/SweetAlert';
import { GET_USERS } from './type';
export const createUser = (user, history) => async dispatch => {
    try {
        const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6Ik9SR0lER1ZOMiIsInV1aWQiOiJVTUEwMDJEVEUyIiwidXNlclR5cGUiOiJNYW5hZ2VyIiwibmFtZSI6IkRpbmFuYXRoIEJhbnNhbCIsImltYWdlX3VybCI6IiIsIlBBU1NXT1JEIjoiJDJiJDEyJEZ6cWZabnFaY3JJOEJqWFVuVGNqMS5GZ240QUFxQldaUDFXdy9HU0wyRUxFdUthTWZEdGhtIiwiaXNBY3RpdmUiOjEsImlzRGVsZXRlIjowLCJleHAiOjE1OTk0MDMxNzd9.4WjtXC9rvgMvMBbVg9UYMKXp7NAIXPcVAmSKhP4t3tc"
        const res = await axios.post("http://127.0.0.1:5000/registerUser",user,{
            headers: {
              
              'authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              "uuid":"UMA002DTE2"
          }
          });
        //conditional rendering here on the basis of response code
        successAlert("Success","user successfully created")
       history.push("/createUser");
    } catch (error) {
        console.log(error)
      
    }
  };

export const getUsers = (page,perPage) => async dispatch => {
    const res = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`);
    dispatch({
      type: GET_USERS ,
      payload: res.data       
    });
  };
