import React, { useState } from 'react';
import styles from "./login.module.css"
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignupClick = () => {

        <Navigate to="/Register/Register.jsx"/>
    };

    return (
        <div className={styles.container}>
            <div className={styles.userAuthentication}>
                <div className={styles.left}>
                    <div className={styles.loginForm}>
                        <div className={styles.header}>
                            <img src={assets.logo} alt="" className='logo' />
                            <br />
                            <div className="intro">
                                <h2 className={styles.subheading}>Welcome Back 👋</h2>
                                <br />
                                <p className={styles.paragraph}>Today is a new day. It`s your day. You shape it.
                                    <br />
                                    Sign in to start ordering.</p>
                            </div>
                        </div>
                        <div className={styles.loginPage}>
                            <div className={styles.form}>
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="email" placeholder='Example@email.com' id="email" className={styles.email} required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <br />
                                <label htmlFor="password">Password</label>
                                <br />
                                <input type="password" placeholder='At least 8 characters' id="password" className={styles.password} required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <br />
                            <div className={styles.signIn}>
                                <button className={styles.buttonSignin} type="submit"> <Link to="/home">Sign in</Link></button>
                            </div>
                            <br />
                            <div className={styles.signUp}>
                                <p className={styles.signup}>Don`t have an account? <button type='creatnewpage' className={styles.buttonsignup} onClick={handleSignupClick}><Link to="/register">Sign up</Link></button></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src={assets.art} alt="" />
                </div>
            </div>
        </div>
    );
}

