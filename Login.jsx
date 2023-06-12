import React, { useState } from "react";
import './test2.css';
import mail2 from './mail2.png';
import backimg from './backimg.png';
import pass from'./pass.png';

export const Login = (props) => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const onsubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }
    return (
        <div class="container">
            <div class="box">
                <div class="item1">
                    <div class="si">LOGIN</div>
                    <div class="line">
                    </div>
                    <div class="form">
                        <form onSubmit={onsubmit}>
                            <div class="ha">
                                <div class="h">
                                    <img class="icon" src={mail2} />
                                    <div class="w">EMAIL</div>
                                </div>
                                <input type="text" class="in" onChange={(e) => setusername(e.target.value)} value={username} placeholder="USERNAME OR EMAIL ID" />
                            </div>
                            <div class="ha">
                                <div class="h">
                                    <img src={pass} alt="" class="icon" />
                                    <div class="w">PASSWORD</div>
                                </div>
                                <input id="pass" type="password" class="in" onChange={(e) => setpassword(e.target.value)} value={password} placeholder="PASSWORD"  />
                            </div>
                            <div class="submit">
                                <input type="submit" class="sub" />
                            </div>
                        </form>
                        <div class="dha">
                            Don't have an account?&nbsp;
                            <p class="sign"  onClick={() => props.onFormSwitch('register')}> Sign Up</p>
                        </div>
                    </div>
                </div>
                <div class="item2">
            <div class="text"></div>
        </div>
            </div>
        </div>
    )
}