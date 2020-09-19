import axios from "axios"
export const createConsignment = (category, history) => async dispatch => {
    try {
        const res = await axios.post("https://service.tradeforsure.com/tradeforsure_webservices/dreamer/User/addconsignment", {
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