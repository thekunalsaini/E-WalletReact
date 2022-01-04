import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DetailServices from '../services/DetailServices';
import LoginService from '../services/LoginService';
import Wallet from '../services/Wallet';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login(){
    let navigate = useNavigate();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    

    
    const loginUser = (e) => {
        e.preventDefault();
        var el = document.getElementById("demo");
        el.innerHTML="<img src=\"https://i.gifer.com/YVPG.gif\" width=\"400px\" height=\"150px\">";
        let user = {email:email,password:password};
        console.log(JSON.stringify(user));
        
        LoginService.login(user).then(response => { 
            console.log(response)
            if(response.status==200){
                localStorage.clear();
            localStorage.setItem("jwt", response.data);
            localStorage.setItem("email", email);
            document.getElementById("demo").innerHTML = "<h2 style='color:green;'>Logged In Successfully...</h2>"
            //navigate("../main", { replace: true }); 
            window.location="/main"; //sideeffect for test case
        }
            
        })
        .catch(error => {
            console.log(error.response)
            localStorage.removeItem("jwt")
            document.getElementById("demo").innerHTML = "<h2 style='color:red;'>error...</h2>"
            
        });
       
        
    }
    const cancel=()=>{
        navigate("/signup", { replace: true });

    }
    const changeEmailHandler=(event) => {
        setemail(event.target.value);
    }
    const changePassHandler=(event) => {
        setpassword(event.target.value);
    }
    
        return (
            <>
            { (localStorage.getItem("jwt")==undefined)?
            (<div className='container' style={{backgroundColor: '#F6FAFC',border: '3px solid lightblue',boxShadow:'8px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'}}>
                <br></br>
                <h1 data-testid="log">Log In</h1>
                <form>
                    <div className="form-group">
                        <label >Email address</label>
                         <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={changeEmailHandler}/>
                         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label >Password</label>
                      <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={changePassHandler}/>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary" onClick={loginUser}>LogIn</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="reset" className="btn btn-primary" onClick={cancel}>Cancel</button>
                </form>
                <p id="demo"></p>
            </div>):(navigate(-1))}
            </>
        )
    
}
