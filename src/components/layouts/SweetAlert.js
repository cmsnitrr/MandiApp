import  swal  from 'sweetalert2';
export const successAlert = (title, msg) =>{
        swal.fire({
            title:title,
            text:msg,
            type:'success'
          });
  };