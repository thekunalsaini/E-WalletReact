import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DetailServices from '../services/DetailServices';
import LoginService from '../services/LoginService';
import Wallet from '../services/Wallet';
import "../App.css";
export default class MainComponent extends Component {
    constructor(props){
        super(props)

        this.state = {id:0,email:'', upi:'',balance:0}
        // this.addMoney = this.addMoney.bind(this);
        // this.sendMoney = this.sendMoney.bind(this);
        // this.sendMoneyUpi = this.sendMoneyUpi.bind(this);
        // this.viewInfo = this.viewInfo.bind(this);
       //  this.updateInfo = this.updateInfo.bind(this);
        // this.deleteInfo = this.deleteInfo.bind(this);
        // this.viewHistory = this.viewHistory.bind(this);
        // this.resetPassword = this.resetPassword.bind(this);
        
    }
    //after render it will called
    componentDidMount(){
        LoginService.getUserInfoByEmail(localStorage.getItem("email")).then((res)=>{
            let det = res.data
            //console.log(det)
            localStorage.setItem("number",det.id)
            this.setState({id:det.id,email:det.email});
            Wallet.Walletdetailsfun(localStorage.getItem("number")).then((res)=>{
                //console.log(res.data)
                let d = res.data
                this.setState({upi:d.upi,balance:d.balance});
            });
        });
        //on unmount data presenrt in variable is deleted
        
        
    }
    
    // SubmitDet = (e) => {
    //     e.preventDefault();
    //     let user = {id:this.state.id,email:this.state.email,upi:this.state.upi,balance:this.state.balance};
    //     console.log(JSON.stringify(user));
    //     DetailServices.detailsfun(user).then(response => { 
    //         console.log(response)
    //         alert('Submit Successfully we are redirecting you to main page...')
    //         window.location="/main";})
    //     .catch(error => {
    //         console.log(error.response)
    //         alert('Server error')
    //     });
    // }
   
    // resetPassword=(event) => {
    //     window.location="/resetpassword";
    // }
    // viewHistory=(event) => {
    //     window.location="/historyf";
    // }
    // deleteInfo=(event) => {
    //     window.location="/delete";
    // }
    // updateInfo=(event) => {
    //     window.location="/update";
    // }
    // viewInfo=(event) => {
    //     window.location="/viewinfo";
    // }
    // sendMoneyUpi=(event) => {
    //     window.location="/sendmoneyupi";
    // }
    // sendMoney=(event) => {
    //     window.location="/sendmoneye";
    // }
    // addMoney=() => {
    //     window.location="/addmoney";
    //     History.push("/addmoney")
    // }
    render() {
        return (<>
        <>
        { (localStorage.getItem("jwt")!=undefined)?
            <div className="sidenav">
            <Link to="/addmoney">Add Money</Link>
                <Link to="/sendmoneye">Send Money</Link>
                <Link to="/sendmoneyupi">Send Money UPI</Link>
                <Link to="/viewinfo">View Info</Link>
                <Link to="/update">Update Info</Link>
                <Link to="/delete">Delete Info</Link>
                <Link to="/historyf">View History</Link>
                {/* {<Link to="/resetpassword"><a">Reset Password</a></Link>} */}
                
            </div>
            :(window.location="/")}
            </>
            <div className="main">
                { (localStorage.getItem("jwt")!=undefined)?
                <div className='container' style={{backgroundColor: '#F6FAFC'}}>
                <br></br>
                <h1 data-testid="site"><i>E-Wallet</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(localStorage.getItem("email")=="kunalsaini8950@gmail.com")?(<Link to="/adminhistory"><button type="submit" className="btn btn-success" >Admin Rights</button></Link>):(<h1></h1>)}
                </h1>
                <div><i><h3 style={{color: "aqua",fontSize:"15px"}}>Hi, {(this.state.email).slice(0,10)}</h3></i></div>
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
                <br></br>
                </div>
                :(window.location="/")}
            </div>
            </>
        )
    }
}
