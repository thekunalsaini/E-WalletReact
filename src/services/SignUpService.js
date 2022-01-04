import axios from 'axios';
import authHeader from './AuthHeader';

const USER_LOGIN_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/auth/register";
class SignUpService{
// function
    signupfun(user){
        console.log(user);
        return axios.post(USER_LOGIN_API_BASE_URL,user)
    }
}

export default new SignUpService()