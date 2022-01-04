import React, { Component } from 'react';
import LoginService from '../services/LoginService';
import DetailServices from '../services/DetailServices';
export default class SubmitDetails extends Component {
    constructor(props){
        super(props)

        this.state = {id:'',email:'',password:'', upi:'',balance:0}
        this.changeupiHandler = this.changeupiHandler.bind(this);
        this.SubmitDet = this.SubmitDet.bind(this);
        
    }
    componentDidMount(){
        LoginService.getUserInfoByEmail(localStorage.getItem("email")).then((res)=>{
            let det = res.data
            this.setState({id:det.id,email:det.email});
        });
    }
    SubmitDet = (e) => {
        e.preventDefault();
        let user = {email:this.state.email,upi:this.state.upi,balance:this.state.balance};
        console.log(JSON.stringify(user));
        DetailServices.detailsfun(user).then(response => { 
            console.log(response)
            alert('Submit Successfully we are redirecting you to login page...')
            localStorage.setItem("c","c");
            window.location="/";})
        .catch(error => {
            console.log(error.response)
            alert('Server error')
        });
    }
   
    changeupiHandler=(event) => {
        this.setState({upi:event.target.value});
        
    }

    render() {
        return (
            <>{ (localStorage.getItem("email")!=undefined && localStorage.getItem("jwt")==undefined && localStorage.getItem("c")==undefined)?
            <div>
                
                
            
                <div className='container' style={{backgroundColor: '#F6FAFC'}}>
                <br></br>
                <h1>Submit Details</h1>
                <form>
                <div className="form-group">
                        <label >Mobile no.</label>
                         <input type="number" name="id" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.id} readOnly/>
                </div>
                <div className="form-group">
                        <label >Email address</label>
                         <input type="email" name="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} readOnly/>
                </div>
                <div className="form-group">
                        <label >UPI</label>
                         <input type="text" name="upi" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter UPI" value={this.state.upi} onChange={this.changeupiHandler}/>
                </div>
                <div className="form-group">
                        <label >Balance</label>
                         <input type="number" name="balance" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" value={this.state.balance} readOnly/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.SubmitDet}>Submit</button>
                </form>
            </div>
                 
                 
            </div>
            :(window.location="/")}
            </>
        )
    }
}
