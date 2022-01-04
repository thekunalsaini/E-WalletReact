import React, { Component } from 'react'
import SignUpService from '../services/SignUpService';
import Wallet from '../services/Wallet';
export default class SignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            id:'',
            email:'',
            password:''
        }

        this.deletebutton = this.deletebutton.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    componentDidMount(){
        Wallet.Walletdetailsfun(localStorage.getItem("number")).then((res)=>{
            console.log(res.data)
            let d = res.data
            this.setState({id:d.id});
        });
    }
    deletebutton = (e) => {
        e.preventDefault();
        //let user = {id:this.state.id,email:this.state.email,password:this.state.password};
        
        Wallet.WalletDeletefun(this.state.id).then(response => { 
            console.log(response)
            alert('Delete Successfully we are redirecting you to Login page...')
            localStorage.removeItem("jwt")
            localStorage.removeItem("number")
            localStorage.removeItem("email")
            window.location="/";})
        .catch(error => {
            console.log(error.response)
            alert('Server error')
        });
    }
    
cancel=()=>{
    window.location="/main";
}
    render() {
        return (
            <>
            { (localStorage.getItem("jwt")!=undefined)?
            <div>
                <br></br>
                <div className='container'>
                <h2>Do you Really want to delete your account?</h2>
                <br></br>
                <button type="submit" className="btn btn-primary" onClick={this.deletebutton}>Confirm</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button  className="btn btn-primary" onClick={this.cancel}>Cancel</button>
               
            </div>
            </div>
            :(window.location="/")}
            </>
        )
    }
}
