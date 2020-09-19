import axiosConfig from '../../axios';

export function postRestCall(url,payload){
    const response  = await axios.post(url,payload)
      .then(res => {
        if(response.staus == 401){
          //remove local variables and logout
          //redirect to login page
        }
        console.log(response);
        return response;
    })
    .catch(err => {
      console.log(err);
     //something went wrong msg or some other error
    })
}