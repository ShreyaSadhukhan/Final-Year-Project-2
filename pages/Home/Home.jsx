import React from 'react';
import { assets } from '../../assets/assets';

function Home() {
    return (
        <div className="homepage">
            <div className="headerfile">
                <div className='headerfile1'>
                    <p>Order Restaurant food, takeaway and groceries.</p>
                    <p>Feast Your Senses,
                    <br />Fast and Fresh</p>
                    <img src={assets.Group_92} alt="" />
                </div>
                <div className='headerfile2'>
                    <img src={assets.Untitled} alt=""/>
                    <img src={assets.Untitled-2} alt="" />
                </div>
                <div className='headerfile3'>
                    <img src={assets.image1} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;