import axios from "axios"
export const createConsignment = (consignment, history) => async dispatch => {
    console.log(consignment.token)
    try {
        const res = await axios.post("https://cors-anywhere.herokuapp.com/https://service.tradeforsure.com/tradeforsure_webservices/dreamer/User/addconsignment",consignment);
        //conditional rendering here on the basis of response code
        console.log(`inside success ${res.data.message}`);
        console.log(res.data)
        //successAlert("Success",res)
      // history.push("/product");
    } catch (error) {
        console.log(`inside failuer ${error}`)
      
    }
  };