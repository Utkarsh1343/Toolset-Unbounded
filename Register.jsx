import React, {useState} from "react";
import './css2.css';

export const Register = (props) => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [password,setpassword] = useState('');
    const [confpassword,setconfpassword] = useState('');

    const onsubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div class="container1">
        <div class="box1">
            <div class="title">Create Account</div>
        <div class="form1">
            <form onSubmit={onsubmit}>
                <div class="ha1" id="alpha">
                    <input type="text" onChange={(e)=>setfirstname(e.target.value)} value={firstname} class="ini" placeholder="First Name"/>
                </div>
                <div class="ha1" id="beta">
                    <input type="text" onChange={(e)=>setlastname(e.target.value)}  value={lastname} class="ini" placeholder="Last Name"/>
                </div>
                <div class="ha1" id="gamma">
                    <div class="h1">
                        EMAIL ID
                    </div>
                    <input type="email" onChange={(e)=> setemail(e.target.value)} value={email} class="in1" placeholder="EMAIL ID"/>
                </div>
                <div class="ha1">
                    <div class="h1">
                        PASSWORD
                    </div>
                    <input type="password" onChange={(e)=> setpassword(e.target.value)} value={password} class="in1" placeholder="PASSWORD"/>
                </div>
                <div class="note">*Atleast 8 characters</div> 
                <div class="ha1">
                    <div class="h1">
                        CONFIRM PASSWORD
                    </div>
                    <input type="password" onChange={(e)=> setconfpassword(e.target.value)} value={confpassword} class="in1" placeholder="PASSWORD"/>
                </div>
                <input type="submit" class="sub1"/>
            </form>
        </div>
        <div class="log1">Already have an account?
            <p class="btn1" onClick={(e)=>props.onFormSwitch('login')}>Login</p>
        </div>
    </div> 
    </div>
        
    )
} 