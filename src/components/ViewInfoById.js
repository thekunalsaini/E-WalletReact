import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LoginService from '../services/LoginService';
import Wallet from '../services/Wallet';

export default class ViewInfoById extends Component {
    constructor(props){
        super(props)

        this.state = {id:0,email:'', upi:'',balance:0}
       
    }
    //after render it will called
    componentDidMount(){
        LoginService.getUserInfoByEmail(localStorage.getItem("email")).then((res)=>{
            let det = res.data
            console.log(det)
            localStorage.setItem("number",det.id)
            this.setState({id:det.id,email:det.email});
        });
        //on unmount data presenrt in variable is deleted
        Wallet.Walletdetailsfun(localStorage.getItem("number")).then((res)=>{
            console.log(res.data)
            let d = res.data
            this.setState({upi:d.upi,balance:d.balance});
        });
        
    }
    
    
    render() {
        return (
            <>{ (localStorage.getItem("jwt")!=undefined)?
            <div>
                <div className='container' style={{backgroundColor: '#F6FAFC'}}>
                <br></br>
                <h1>Personal Details</h1>

                <div className="form-group">
                        <label >Number</label>
                         <input type="number" name="id" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value={this.state.id} readOnly/>
                </div>
                <div className="form-group">
                        <label >Email address</label>
                         <input type="email" name="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} readOnly/>
                </div>
                <div className="form-group">
                        <label >UPI</label>
                         <input type="text" name="upi" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter UPI" value={this.state.upi} readOnly/>
                </div>
                <div className="form-group">
                        <label ><b>Balance (₹)</b></label>
                         <input type="number" name="balance" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" value={this.state.balance} readOnly/>
                </div>
                
                </div>
            </div>
            :(window.location="/")}
            </>
        )
    }
}
