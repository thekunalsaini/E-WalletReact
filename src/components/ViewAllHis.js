import React, { Component } from 'react';
import LoginService from '../services/LoginService';
import Wallet from '../services/Wallet';
export default class ViewAllHis extends Component {
    constructor(props){
        super(props)

        this.state = {
            historydata:[],
            items:[],
            name:''
            
        }
        this.nextSlice=this.nextSlice.bind(this);
        
    }
    
    componentDidMount(){
        Wallet.WalletAllHisfun().then((res)=>{
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
                                    <th> S.No.</th>
                                    <th> Sender</th>
                                    <th> Receiver</th>
                                    <th> moneysent</th>
                                    <th> self Moneyadded</th>
                                    <th> self Added</th>
                                    <th> Date -Time</th>
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
                                             <td> { e.sender} </td>   
                                             <td> {e.receiver}</td>
                                             <td> {e.moneysent}</td>
                                             <td> {e.self.moneyadded}</td>
                                             <td> {e.self.selfadd}</td>
                                             <td> {e.date_Time}</td>
                                             
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
