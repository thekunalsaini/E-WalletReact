import axios from 'axios';

const USER_LOGIN_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/auth/login";
const USER_LOGINDetail_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/auth/viewinfoByEmail";

class LoginService{

    login(user){
        console.log(user);
        return axios.post(USER_LOGIN_API_BASE_URL,user)
        .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              if(error.response.status){
                 alert("Enter correct email & password")
              }
              localStorage.setItem("jwt", null);
              console.log(error.response.headers);
              //window.location = "/submitDetails";
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
        
          });
    }

    getUserInfoByEmail(email){
      return axios.get(USER_LOGINDetail_API_BASE_URL + '/' + email)
    }
}

export default new LoginService()