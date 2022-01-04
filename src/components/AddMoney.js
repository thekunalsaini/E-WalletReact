import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DetailServices from '../services/DetailServices';
import LoginService from '../services/LoginService';
import Wallet from '../services/Wallet';
import x from './x.gif';

export default class AddMoney extends Component {
    constructor(props){
        super(props)

        this.state = {id:0,email:'', upi:'',money:'',set:0}
        this.SubmitDet = this.SubmitDet.bind(this);
        this.moneySend = this.moneySend.bind(this);
        
        
    }
    //after render it will called
    componentDidMount(){
        const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
        //<script src=""></script>
        LoginService.getUserInfoByEmail(localStorage.getItem("email")).then((res)=>{
            let det = res.data
            //console.log(det)
            localStorage.setItem("number",det.id)
            this.setState({id:det.id,email:det.email});
        });
        //on unmount data presenrt in variable is deleted
        Wallet.Walletdetailsfun(localStorage.getItem("number")).then((res)=>{
            //console.log(res.data)
            let d = res.data
            this.setState({upi:d.upi});
        });
        
    }
    
    SubmitDet = (e) => {
        e.preventDefault();
        var el = document.getElementById("demo");
        el.innerHTML="<img src=\"https://i.gifer.com/YVPG.gif\" width=\"400px\" height=\"150px\">";
        
        Wallet.WalletAddMoneyfun(this.state.email,this.state.money).then(response => { 
            //console.log(response)
            //alert('Sent Successfully...')
            document.getElementById("demo").innerHTML = "<h2 style='color:green;'>Money Added Successfully...</h2>"
            //window.location="/main";

        })
        .catch(error => {
            console.log(error.response)
            alert('Server error')
        });
    }
   
    moneySend=(event) => {
        this.setState({money:event.target.value});
        
    }
 
    display=()=>{
        let d;
        console.log("payment started")
        let amt = this.state.money
        if(amt==""|| amt ==null || amt<=0)
        {
            alert("Amount Invalid!!!")
            return;
        }
        //url='/create_order',
        
        let data={amount:this.state.money,
        conentType:'application/json',
        type:'POST',
        dataType:'json',
        success:function(response){
        console.log(response)
        
        if(response.data.status == "created"){
            //open form
            let options = {
                key:"rzp_test_KKklEAFygqtEjy",
                amount:response.data.amount,
                currency:"INR",
                name:"E-Wallet",
                description:"online wallet made by Kunal",
                image:"https://upload.wikimedia.org/wikipedia/commons/4/4e/DotOnline_gTLD_logo.svg",
                order_id:response.data.id,
                
                handler:function(response){
                    console.log("hi")
                    
                console.log(response.razorpay_payment_id)
                console.log(response.razorpay_order_id)
                //localStorage.setItem("check",response.razorpay_payment_id)  
                d = response.razorpay_payment_id
                console.log(response.razorpay_signature)
                var el = document.getElementById("demo");
                el.innerHTML="<h1>Please wait Don't exit the window</h1>"
        
                alert("Successful Done Payment.....")
                
                },
                notes:{address:"kunal e-wallet"}
                
            }
            
            let rzp = new window.Razorpay(options);
            // rzp.on('payment.failed', function (response){
            //     alert(response.error.code);
            //     alert(response.error.description);
            //     alert(response.error.source);         
            //     alert(response.error.step);
            //     alert(response.error.reason);
            //     alert(response.error.metadata.order_id);
            //     alert(response.error.metadata.payment_id);
                
                
            //     })
            rzp.open();        
          
           
    
        }},
        error:function(error){
        console.log(error)
        alert("something went wrong...")
        
        }

    }
    
    Wallet.pay(data).then(response => { 
        console.log(response.data)
        //alert('Sent Successfully...')
        //document.getElementById("demo").innerHTML = "<h2 style='color:green;'>Money Added Successfully...</h2>"
        //window.location="/main";
         data.success(response)
         

    })
    .catch(error => {
        console.log(error.response)
        alert('Server error')
    });
    setTimeout(function() {
        console.log(d);
        if(d!=null || d!='')
        {
            document.getElementById("cl").click();
        }
    }, 20000);
}
    render() {
        return (
            <div>
                { (localStorage.getItem("jwt")!=undefined)?
                <div className='container' style={{backgroundColor: '#F6FAFC'}}>
                <br></br>
                <h1 data-testid="add">Add Money</h1>
                <div className="form-group">
                        <label >Account Email</label>
                         <input type="email" name="owner" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter upi" value={this.state.email} readOnly/>
                </div>
                <div className="form-group">
                        <label ><b>Amount (₹)</b></label>
                         <input type="number" name="money" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" value={this.state.money} onChange={this.moneySend} />
                </div>
                <br></br>
                <button type="submit" id = "cl" className="btn btn-primary" hidden onClick={this.SubmitDet}>Add Money via RazorPay</button>
                <button id="rzp-button1" className="btn btn-primary" onClick={this.display}>Add Money via RazorPay</button>
                <br></br><br></br>
                <p id="demo"></p>
                </div>
            :(window.location="/")}
            </div>
        )
    }
}
