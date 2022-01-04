import React, { useState } from 'react'
import DetailServices from '../services/DetailServices';
import SignUpService from '../services/SignUpService';
import { useNavigate } from "react-router-dom";
export default function SignUp() {
    let navigate = useNavigate();
    const [id, setid] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [upi, setupi] = useState('')
    const [balance, setbalance] = useState(0)
     

    
    const SignUpbutton = (e) => {
        e.preventDefault();
        let num = id
        let user = {id:id,email:email,password:password};
        console.log(JSON.stringify(user));
        if(num.length==9 && email!=null && password!=null && password.length>=6 && email.includes("@")==true){
        SignUpService.signupfun(user).then(response => { 
            
            console.log(response)
            localStorage.setItem("email", email);
            alert('SignUp Successfully we are redirecting you to submit details page...')
            window.location = "/submitdetails";
            })
        .catch(error => {
            console.log(error.response)
            alert('Server error')
        });}
        else{
            alert("enter details in proper format!!!")
        }
    }
    const cancel=()=>{
        navigate("/", { replace: true });

    }

    const changeEmailHandler=(event) => {
        setemail(event.target.value);
    }
    const changePassHandler=(event) => {
        setpassword(event.target.value);
    }
    const changeIdHandler=(event) => {
        setid(event.target.value);
    }

    
        return (
            <div >{ (localStorage.getItem("jwt")==undefined)?(localStorage.getItem("email")==undefined)?
                (<div className='container' style={{backgroundColor: '#F6FAFC',border: '3px solid lightblue',boxShadow:'8px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'}}>
                <br></br>
                <h1>Sign Up</h1>
                <form>
                <div className="form-group">
                        <label >Mobile no.</label>
                         <input type="number" name="id" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Number" value={id} onChange={changeIdHandler}/>
                </div>
                <div className="form-group">
                        <label >Email address</label>
                         <input type="email" name="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter Email" value={email} onChange={changeEmailHandler}/>
                </div>
                <div className="form-group">
                        <label >Password</label>
                         <input type="password" name="password" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter Password" value={password} onChange={changePassHandler}/>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary" onClick={SignUpbutton}>SignUp</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="reset" className="btn btn-primary" onClick={cancel}>Cancel</button>
                </form>
            </div>):(window.location="/submitdetails"):navigate(-1,{ replace: true })}
            </div>
        )
    
}
