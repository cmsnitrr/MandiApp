import axios from "axios";
import { GET_ERRORS,GET_LOGEDIN_USER_DATA} from "./type";

  export function login(user){
    
    return async dispatch=>{
       try { 
        const res = await axios.post("https://cors-anywhere.herokuapp.com/https://service.tradeforsure.com/tradeforsure_webservices/dreamer/User/login", user);
        console.log("inside login action")
      }
       catch (error) {
    console.log(`inside error action ${error}`)
    }
      return await axios.post("https://cors-anywhere.herokuapp.com/https://service.tradeforsure.com/tradeforsure_webservices/dreamer/User/login", user)
    }
  }