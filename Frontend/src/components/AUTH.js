import Axios from 'axios'
import decode from 'jwt-decode'

const Auth  = {
       
   //  LoggedIn : () => {
   //     if(localStorage.getItem("token")){
   //       const data = decode(localStorage.getItem("token"))
   //       Axios.post(`http://localhost:4000/check`,{token : localStorage.getItem('token')})
   //       .then((res) => {
   //         if(data === res.data){
               
   //            return "true"
   //         }
   //         else{   
    
   //            return "false"
   //         }
   //       })
   //      }
   //      else{
   //         return 'false'
   //      }
   //     }
     
    };

    export default Auth