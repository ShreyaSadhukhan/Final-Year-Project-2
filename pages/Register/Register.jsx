import React, { useState } from 'react';
import './register.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="register">
            <div className="userAuthentication">
                <div className="left">
                    <div className="loginForm">
                        <div className="header">
                            <img src={assets.logo} alt="" className='logo' />
                            <br />
                            <div className="intro">
                                <h2 className="subheading">Welcome Back </h2>
                                <br />
                                <p className="paragraph">
                                    Today is a new day. It`s your day. You shape it.
                                    <br />
                                    Sign in to start ordering.
                                </p>
                            </div>
                        </div>
                        <div className="Register-Page">
                            <div className="form">
                                <label htmlFor="name">Name</label>
                                <br />
                                <input type="text" placeholder='eg. John A' id="name" className="name" required value={name} onChange={(e) => setName(e.target.value)} />
                                <br />
                                <label htmlFor="phonenumber">Phone Number</label>
                                <br />
                                <input type="number" placeholder='Enter your 10 digit mobile number' id="phonenumber" className="phonenumber" required value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                                <br />
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="email" placeholder='Example@email.com' id="email" className="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <br />
                                <label htmlFor="password">Password</label>
                                <br />
                                <input type="password" placeholder='At least 8 characters' id="password" className="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <br />
                            <div className="continue">
                                <button className="continue" type="submit">Continue</button>
                            </div>
                            <br />
                            <div className="signin">
                                <p className="sub-signin">Don`t have an account? <button type='creatnewpage' className="buttonsignin">
                                    <Link to="/home">Sign in</Link></button></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={assets.art} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register