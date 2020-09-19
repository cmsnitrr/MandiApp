import axios from "axios";
import { GET_PRODUCTS } from './type';
import { successAlert } from './../components/layouts/SweetAlert';
export const getProductDetails = (reqObject) => async dispatch => {
  console.log(`above axios${reqObject}`)
  const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6Ik9SR0RYMkdXMSIsInV1aWQiOiJVT1IwMDFINDkxIiwidXNlclR5cGUiOiJPcmdhbml6YXRpb24gSGVhZCIsIm5hbWUiOiJQYXJ2ZXNoIEJuYXNhbCIsImltYWdlX3VybCI6IiIsIlBBU1NXT1JEIjoiJDJiJDEyJGZMckRmV1EzOVFIOGd6US5tZzF4ay5GcXltNXJRcGhqb1ZlQ2tmTUQwblUyVDdjWENkbEEuIiwiaXNBY3RpdmUiOjEsImlzRGVsZXRlIjowLCJleHAiOjE2MDAyOTI1MDd9.0q1FAsCoWDzqeyG2FITSf3xmvFrwxkR7fASDEB7Bks4"
 try{
  const res = await axios.post("http://127.0.0.1:5000/getProducts",reqObject,{
    headers: {
      
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      "uuid":"UOR001H491"
  }
  });
  {console.log("response data")}
  {console.log(res.data)}
  console.log("below axios")
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.product_data_list
    });
  }catch(error){
    console.log(`error insdie getProducts ${error}`)
    console.log(error)
  }
  };

export const createProduct = (product, history) => async dispatch => {
    try {
const res = await axios.post("http://127.0.0.1:5000/add_product", 
        {
          orgId: 'ORGDX2GW1',
          product_list:[{name:product.productName,brandname:product.brandName,description:product.description,image_url:'https://www.gstatic.com/webp/gallery/5.jpg'}]
        });
        //conditional rendering here on the basis of response code
        console.log(res);
        successAlert("Success",res.Message)
        history.push("/product");
    } catch (error) {
      
    }
  };