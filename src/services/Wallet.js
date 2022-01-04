import axios from 'axios';
import AuthHeader from './AuthHeader';

const USER_INFOID_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/viewinfoById";
const USER_UPDATE_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/updateinfo";
const USER_DELETE_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/deleteinfoById";
const USER_HISTORYF_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/historyfilter";
const USER_SENDMONEYEMAIL_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/sendmoney";
const USER_SENDMONEYUPI_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/sendmoneyupi";
const USER_ADDMONEY_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/addmoney";
const USER_ALLINFO_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/viewAllinfo";
const USER_ALLHIS_API_BASE_URL = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/viewallhistory";
const RAZORPAY_PAY = "http://gatewayservice-env.eba-9myjpfnb.us-east-1.elasticbeanstalk.com/wallet/create_order";
class Wallet{
    
// function
    Walletdetailsfun(id){
        console.log(id);
        return axios.get(USER_INFOID_API_BASE_URL + '/' + id,{ headers: AuthHeader()  })
    }
    WalletUpdatefun(id,user){
        console.log(id);
        return axios.put(USER_UPDATE_API_BASE_URL + '/' + id,user,{ headers: AuthHeader()  })
    }
    WalletDeletefun(id){
        console.log(id);
        return axios.delete(USER_DELETE_API_BASE_URL + '/' + id,{ headers: AuthHeader()  })
    }
    WalletHistoryFfun(id){
        console.log(id);
        return axios.get(USER_HISTORYF_API_BASE_URL + '/' + id,{ headers: AuthHeader()  })
    }
    WalletSendMoneyEmailfun(email,money,owner){
        console.log(email + ' ' + money + ' ' + owner);
        return axios.get(USER_SENDMONEYEMAIL_API_BASE_URL + '/' + email + '/' + money + '/' + owner, { headers: AuthHeader()  })
    }
    WalletSendMoneyUPIfun(email,money,owner){
        console.log(email + ' ' + money + ' ' + owner);
        return axios.get(USER_SENDMONEYUPI_API_BASE_URL + '/' + email + '/' + money + '/' + owner,{ headers: AuthHeader()  })
    }
    WalletAddMoneyfun(email,money){
        console.log(email + ' ' + money );
        return axios.get(USER_ADDMONEY_API_BASE_URL + '/' + email + '/' + money,{ headers: AuthHeader()  })
    }
    WalletAllInfofun(email,money){
        console.log(email + ' ' + money );
        return axios.get(USER_ALLINFO_API_BASE_URL,{ headers: AuthHeader()  })
    }
    WalletAllHisfun(email,money){
        console.log(email + ' ' + money );
        return axios.get(USER_ALLHIS_API_BASE_URL,{ headers: AuthHeader()  })
    }
    pay(amt){
        
        return axios.post(RAZORPAY_PAY,amt,{ headers: AuthHeader()  })
    }
}

export default new Wallet()