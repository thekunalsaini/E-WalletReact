import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DetailServices from '../services/DetailServices';
import LoginService from '../services/LoginService';
import Wallet from '../services/Wallet';

export default class SendMoney extends Component {
    constructor(props){
        super(props)

        this.state = {id:0,email:'', upi:'',money:'',receiver:''}
        this.SubmitDet = this.SubmitDet.bind(this);
        this.moneySend = this.moneySend.bind(this);
        this.receiverMoney = this.receiverMoney.bind(this);
        
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
            this.setState({upi:d.upi});
        });
        
    }
    
    SubmitDet = (e) => {
        e.preventDefault();
        if(this.state.email==""|| this.state.money ==null || this.state.money<=0 || this.state.email.includes("@")==false){
            alert("Invalid Amount or UPI")
            document.getElementById("demo").innerHTML = "<h2 style='color:green;'>Invalid Amount or UPI...</h2>"
       
        } else{
            var el = document.getElementById("demo");
            el.innerHTML="<img src=\"https://i.gifer.com/YVPG.gif\" width=\"400px\" height=\"150px\">";
                 
        Wallet.WalletSendMoneyEmailfun(this.state.receiver,this.state.money,this.state.email).then(response => { 
           
            console.log(response)
            let amt = this.state.money
            if(amt==""|| amt ==null || amt<=0){
                alert("Invalid Amount")
            } else{
        
            if(response.data=='Less money present. Please add more :)')
            {
                alert('Less money present. Please add more :)')
            document.getElementById("demo").innerHTML = "<h2 style='color:green;'>Less money present. Please add more :)</h2>"
            //window.location="/main";
            }
            else{
            alert('Sent Successfully...')
            document.getElementById("demo").innerHTML = "<h2 style='color:green;'>Money Sent Successfully...</h2>"}
            }
            //window.location="/main";
        })
        .catch(error => {
            console.log(error.response)
            alert('Server error')
        });}
    }
   
    moneySend=(event) => {
        this.setState({money:event.target.value});
        
    }
    receiverMoney=(event) => {
        this.setState({receiver:event.target.value});
        
    }
    render() {
        return (
            <>{ (localStorage.getItem("jwt")!=undefined)?
            <div style={{backgroundColor: '#F6FAFC'}}><form>
                <div className='container'>
                <br></br>
                <h1>Send Money Using Email</h1>

                
                <div className="form-group">
                        <label >Sender(Owner)</label>
                         <input type="email" name="owner" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} readOnly/>
                </div>
                <div className="form-group">
                        <label >Receiver</label>
                         <input type="text" name="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.receiver} onChange={this.receiverMoney} />
                </div>
                <div className="form-group">
                        <label ><b>Amount (???)</b></label>
                         <input type="number" name="money" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" value={this.state.money} onChange={this.moneySend} />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary" onClick={this.SubmitDet}>Send</button>
                <br></br><br></br>
                <p id="demo"></p>
                </div>
                </form>
            </div>
            :(window.location="/")}
            </>
        )
    }
}
