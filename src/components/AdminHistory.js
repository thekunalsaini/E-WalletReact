import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class AdminHistory extends Component {
    render() {
        return (
            <>
            { (localStorage.getItem("email")=="kunalsaini8950@gmail.com")?
            <div className="container" style={{backgroundColor: '#F6FAFC'}}>
                <br></br>
                <h1>Admin Rights :-</h1>
                <Link to="/viewallinfo"><button className="btn btn-primary">View All Info</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/viewallhis"><button className="btn btn-primary">View All History</button></Link>
                
            </div>
            :(window.location="/")}
            </>
        )
    }
}
