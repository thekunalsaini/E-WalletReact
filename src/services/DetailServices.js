import axios from 'axios';
import AuthHeader from './AuthHeader';

const USER_DETAIL_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/addinfo";
class DetailServices{
// function
    detailsfun(user){
        console.log(user);
        return axios.post(USER_DETAIL_API_BASE_URL,user)
    }
}

export default new DetailServices()