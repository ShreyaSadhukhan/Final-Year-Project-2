import "./Footer.css";
import { assets } from '../../assets/assets';
import { useState } from 'react';

function Footer() {
    const [email, setEmail] = useState('');

    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-row">
                    <div className="logo">
                        <img src={assets.logo} alt="" className="logo" />
                    </div>
                    <img
                        src={assets.app_store_badges}
                        alt=""
                        className="appStoreBadges" />
                    <div className="content">
                        Company # 490039-445, Registered with House of companies.
                    </div>
                </div>
                <div className="footer-row">
                    <h4>Get Exclusive Deals in your Inbox</h4>
                    <div className="mail">
                            <input type="email" placeholder='youremail@email.com' id="email" className="text-email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button className="subscribe">Subscribe</button>
                    </div>
                    <p>we wont spam, read our email policy</p>
                    <div className="socialMedia">
                        <img src={assets.facebook} alt="" />
                        <img src={assets.instagram} alt="" />
                        <img src={assets.TikTok} alt="" />
                        <img src={assets.snapchat} alt="" />
                    </div>
                </div>
                <div className="footer-row">
                    <h4>Legal Pages</h4>
                    <ul>
                        <li>Terms and conditions</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Modern Slavery Statement</li>
                    </ul>
                </div>
                <div className="footer-row">
                    <h4>Important Link</h4>
                    <ul>
                        <li>Get help</li>
                        <li>Add your restaurant</li>
                        <li>Sign up to deliver</li>
                        <li>Create a business account</li>
                    </ul>
                </div>
            </div>
            <div className="footer-row2">
                <p className="footer-copyright">
                    Order.uk Copyright 2024, All Rights Reserved.
                </p>
                <ul className="footer-link">
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Pricing</li>
                    <li>Do not sell or share my personal information</li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;
