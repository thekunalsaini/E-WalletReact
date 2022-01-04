import React, { Component } from 'react';
import LoginService from '../services/LoginService';
import Wallet from '../services/Wallet';
import "../App.css";
export default class HistoryFilter extends Component {
    constructor(props){
        super(props)

        this.state = {
            historydata:[],
            items:[],
            name:'',
            selectoption:''
            
        }
        this.nextSlice=this.nextSlice.bind(this);
        this.select=this.select.bind(this);
        
    }
    
    componentDidMount(){
        Wallet.WalletHistoryFfun(localStorage.getItem("email")).then((res)=>{
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
 
   select=(event) => {
    this.setState({selectoption:event.target.value});
    
}
    search=(e)=>{
        const New = this.state.items.filter(x=>x.self.selfadd==this.state.selectoption)
        this.setState({items:New})
    }
    render() {
        return (
            <>
            { (localStorage.getItem("jwt")!=undefined)?
            <div>
                {/* <input type='text placeholder' placeholder='enter name...' value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}/>
                <button onClick={this.handlesearch}>search</button> */}
                 <h2 className="text-center">History</h2>
                
                 <br></br>
                 <div id ="his" className = "row">
                     <div className='container' id ="searchbtn">
                 <select className='form-control' onChange={this.select} style={{text:'center'}}>
                                <option value=''>-Select-</option>
                                <option value='YES'>Self Funded</option>
                                <option value='NO'>Money Sent</option>
                            </select>
                            &nbsp;&nbsp;<button type="submit" className="btn btn-primary" onClick={this.search}>Search</button>
                            </div>
                        <table className = "table table-striped table-bordered table-hover ">

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
