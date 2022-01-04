import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
  } from "react-router-dom";
import Login from './Login';
import NotFound from './NotFound';
import SignUp from './SignUp';
import SubmitDetails from './SubmitDetails';
import MainComponent from './MainComponent';
import ViewInfoById from './ViewInfoById';
import Update from './Update';
import HistoryFilter from './HistoryFilter';
import ResetPass from './ResetPass';
import SendMoneyUpi from './SendMoneyUpi';
import SendMoney from './SendMoney';
import Delete from './Delete';
import AddMoney from './AddMoney';
import AdminHistory from './AdminHistory';
import ViewAllInfo from './ViewAllInfo';
import ViewAllHis from './ViewAllHis';
import "../App.css";
export default function HeaderComponent() {
   
    const myFunction=()=> {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    const logout=()=>{
        
        localStorage.removeItem("jwt")
        localStorage.removeItem("number")
        localStorage.removeItem("email")
        localStorage.removeItem("slice");
        localStorage.removeItem("rzp_device_id");
        window.location="/";
    }
    const mainRedirect=()=>{
        window.location="/main";
    }
   
    
        return (
            <div>
                
                <Router>
                <header id = "nav">
                    <nav id ="bar" className="navbar navbar-expand-md navbar-dark bg-dark">
                    &nbsp;&nbsp;<a className="navbar-brand" style={{color: "aqua"},{padding: "10px"},{hover:'aqua'}}>E-Wallet</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    {localStorage.getItem("jwt")==undefined?(""): (<><Link  className="navbar-brand" to="/" onClick={mainRedirect} style={{color:'white', textDecoration: 'none' }}>Home</Link></>)}
                    <Link  className="navbar-brand" to="/" style={{color:'white', textDecoration: 'none' }}>Login</Link>
                    <Link  className="navbar-brand" to="/signup" style={{color:'white', textDecoration: 'none' }}>Sign Up</Link>&nbsp;
                    {/* {<Link to="launch">Launch</Link>} */}
                    {localStorage.getItem("jwt")==undefined?(""): (<button className="btn btn-danger" onClick={logout}>Logout</button>)}

                    </nav>
                    <a id="logo" style={{color: "aqua",padding: "2px",cursor:"pointer"}}>E-Wallet</a>
                    <a id ="iconbar" ><i className='fa fa-bars' onClick={myFunction}></i></a>

                </header>
                <div className="topnav" id="myTopnav">
                {localStorage.getItem("jwt")==undefined?(""):(<a href="#" className="active">Home</a>)}
                <a href="#">Login</a>
                <a href="#">Sign Up</a>
                {localStorage.getItem("jwt")==undefined?(""):(<a href="#">Logout</a>)}
                </div>
                <Routes>
                   <Route path="/" element={<Login />} />
                   <Route path="/signup" element={<SignUp />} />
                   <Route path="/submitdetails" element={<SubmitDetails />} />
                   <Route path="/main" element={<MainComponent />} />
                   <Route path="/addmoney" element={<AddMoney />} />
                   <Route path="/delete" element={<Delete />} />
                   <Route path="/sendmoneye" element={<SendMoney />} />
                   <Route path="/sendmoneyupi" element={<SendMoneyUpi />} />
                   <Route path="/resetpassword" element={<ResetPass />} />
                   <Route path="/historyf" element={<HistoryFilter />} />
                   <Route path="/update" element={<Update />} />
                   <Route path="/viewinfo" element={<ViewInfoById />} />
                   <Route  path="/adminhistory" element={<AdminHistory />} />
                     <Route path="/viewallinfo" element={<ViewAllInfo />} />
                     <Route path="/viewallhis" element={<ViewAllHis />} />
                   <Route path="*" element={<NotFound />} />
                </Routes>
                </Router>
            </div>
        )
    
}
