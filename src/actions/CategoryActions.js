import axios from "axios";
import { successAlert } from './../components/layouts/SweetAlert';
import { GET_CATEGORIES } from "./type";
export const createCategory = (category, history) => async dispatch => {
    try {
        const res = await axios.post("http://127.0.0.1:5000/create_category", {
          orgId:'ORGDX2GW1',
          name:category.categoryName,
          description:category.categoryDescription
        });
        //conditional rendering here on the basis of response code
        console.log(res);
        successAlert("Success",res)
       history.push("/product");
    } catch (error) {
      
    }
  };
  export const getCategoryDetails = (reqObject) => async dispatch => {
    //console.log("above axios")
    const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6Ik9SR0lER1ZOMiIsInV1aWQiOiJVTUEwMDJEVEUyIiwidXNlclR5cGUiOiJNYW5hZ2VyIiwibmFtZSI6IkRpbmFuYXRoIEJhbnNhbCIsImltYWdlX3VybCI6IiIsIlBBU1NXT1JEIjoiJDJiJDEyJEZ6cWZabnFaY3JJOEJqWFVuVGNqMS5GZ240QUFxQldaUDFXdy9HU0wyRUxFdUthTWZEdGhtIiwiaXNBY3RpdmUiOjEsImlzRGVsZXRlIjowLCJleHAiOjE1OTkwMzg5MjR9.ZpcYlw9lTwgDylvDJp73rCW-Hz3w1dv-MH3Er1VtdY8"
    try {
    const res = await axios.post("http://127.0.0.1:5000/getCategory",reqObject,{
      headers: {
        
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        "uuid":"UMA002DTE2"
    }
    });
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data.CategoryList
      });
    }catch(error){
      
    }
    };