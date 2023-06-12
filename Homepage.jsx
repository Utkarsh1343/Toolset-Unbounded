import React, { useState } from "react";
import './at.css';

export const Homepage = (props) => {


    return (
        <>
            <nav>
                <ul className="menu">

                    <li className="logo"><a href="#">MyDisk</a></li>
                    <li className="item"><a href="#">Home</a></li>

                    <li className="item"><a href="#">About</a></li>
                    <li className="item"><a href="#">Plans</a></li>
                    <li className="item"><a href="#">Contact Us</a></li>
                    <li className="item Button btn1" onClick={() => props.onFormSwitch('login')}><a href="#">Log In</a></li>
                    <li className="item Button sec" onClick={() => props.onFormSwitch('register')}><a href="#">Sign Up</a></li>
                    <li className="toggle "><a href="#"><i className="fas fa-bars"></i></a></li>


                </ul>
                <div className="icon"></div>
            </nav>
            <div className="container">
                <div className="box" id="box1">MyDisk</div>
                <div className="box lower" >&#8226; Storage you can rely on.</div>
                <div className="box lower ">&#8226; No hidden charges.</div>
                <div className="box lower">&#8226; Affordable.</div>
                <div className="box lower">&#8226; Your perfect back-up partner.</div>
            </div>
        </>
    )
} 