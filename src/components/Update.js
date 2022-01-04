import React, { Component } from 'react';
import LoginService from '../services/LoginService';
import Wallet from '../services/Wallet';
export default class Update extends Component {
    constructor(props){
        super(props)

        this.state = {id:0,email:'',password:'', upi:'',balance:0}
        this.changeupiHandler = this.changeupiHandler.bind(this);
        this.SubmitDet = this.SubmitDet.bind(this);
        
    }
    componentDidMount(){
        Wallet.Walletdetailsfun(localStorage.getItem("number")).then((res)=>{
            console.log(res.data)
            let d = res.data
            this.setState({id:d.id,balance:d.balance});
        });
    }
    SubmitDet = (e) => {
        e.preventDefault();
        let user = {id:this.state.id,email:this.state.email,upi:this.state.upi,balance:this.state.balance};
        //console.log(JSON.stringify(user));
        //alert(this.state.id)
        Wallet.WalletUpdatefun(this.state.id,user).then(response => { 
            console.log(response)
            alert('updated Successfully we are redirecting you to main page...')
            window.location="/main";
        })
        .catch(error => {
            console.log(error.response)
            alert('Server error')
        });
    }
   
    changeupiHandler=(event) => {
        this.setState({upi:event.target.value});
    }
    changeemailHandler=(event) => {
        this.setState({email:event.target.value});
    }

    render() {
        return (
            <>{ (localStorage.getItem("jwt")!=undefined)?
            <div>
            
                
                
                <div className='container' style={{backgroundColor: '#F6FAFC'}}>
                <br></br>
                <h1 data-testid='update'>Update Details</h1>
                <form>
                <div className="form-group">
                        <label >Mobile no.</label>
                         <input type="number" name="id" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.id} readOnly/>
                </div>
                <div className="form-group">
                        <label >UPI</label>
                         <input type="text" name="upi" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter UPI" value={this.state.upi} onChange={this.changeupiHandler}/>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary" onClick={this.SubmitDet}>Submit</button>
                </form>
            </div>
                 
                 
            </div>
            :(window.location="/")}
            </>
        )
    }
}
