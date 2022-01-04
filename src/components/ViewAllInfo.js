import React, { Component } from 'react';
import LoginService from '../services/LoginService';
import Wallet from '../services/Wallet';
export default class ViewAllInfo extends Component {
    constructor(props){
        super(props)

        this.state = {
            historydata:[],
            items:[],
            
            
        }
        this.nextSlice=this.nextSlice.bind(this);
        
    }
    
    componentDidMount(){
        Wallet.WalletAllInfofun().then((res)=>{
            console.log(res.data)
            this.setState({historydata:res.data});
            this.setState({items:this.state.historydata.slice(0, 12)})
            localStorage.setItem("slice",12);
        });
        
    }
    // handlesearch=()=>{
    //     console.log("hi")
    //     console.log(this.state.name)
    //     const newData = this.state.historydata.filter(x => x.sender ==this.state.name)
    //     this.setState({items:newData})
    // }
   nextSlice=()=>{
       if(this.state.historydata.length > localStorage.getItem("slice")){
    this.setState({items:this.state.historydata.slice(localStorage.getItem("slice"), localStorage.getItem("slice")*2)})
    localStorage.setItem("slice",localStorage.getItem("slice")*2);}
    
   }
 

    render() {
        return (
            <>{ (localStorage.getItem("jwt")!=undefined)?
            <div>
                {/* <input type='text placeholder' placeholder='enter name...' value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}/>
                <button onClick={this.handlesearch}>search</button> */}
                 <h2 className="text-center">History</h2>
                
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Mobile Number</th>
                                    <th> Balance</th>
                                    <th> UPI</th>
                                    <th> Email Id</th>
                                    <th><button type="submit" className="btn btn-primary" onClick={this.nextSlice}>Next &gt;&gt;</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    this.state.items.map(
                                        e => 
                                        <tr key = {e.id}>
                                            <td></td>
                                             <td> {e.id}</td>
                                             <td> { e.balance} </td>   
                                             <td> {e.upi}</td>
                                             <td> {e.email}</td>
                                            
                                             
                                        </tr>
                                    )
                                }
                                
                            </tbody>
                            
                        </table>
                                
                 </div>

            </div>
            :(window.location="/")}
            </>
        )
    }
}
