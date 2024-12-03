import "./Navbar.css";
import { assets } from '../../assets/assets';

function Navbar() {
    return (
            <div className="Container">
                <div className="sub-container">
                    <div className="left-container">
                    <p className="offer">🌟  Get 5% Off your first order,
                        <br />
                        <p className="order" >Promo: ORDER5</p> </p>
                    </div>
                    <div className="middle">
                        <img src={assets.Location_icon} alt="" className="location" />
                        <p>Regent Street, A4, A4201, London</p>
                        <p className="change-location" >Change Location</p>
                    </div>
                    <div className="right-container">
                        <img src={assets.My_Cart} alt="" className="user" />
                        <ul>
                        <li>My Cart</li>
                        </ul>
                    </div>
                </div>
                <div className="navbar">
                    <div className="logo">
                        <img src={assets.logo} alt="" className="logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li className="home"><a href="#">Home</a></li>
                            <li><a href="#">Special Offers</a></li>
                            <li><a href="#">Restaurants</a></li>
                            <li><a href="#">Track Order</a></li>
                        </ul>
                    </div>
                    <button className="login-signup"><img src={assets.Contact} alt="" />Login/Signup</button>
                </div>
            </div>
    );
}

export default Navbar;