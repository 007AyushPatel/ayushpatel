import React from 'react';
import './UserProfileCard.css';
import dp from '../images/dp.jpeg'

const UserProfileCard=()=>{
    return (
        <div className='upc'>
            <div className='gradiant'></div>
            <div className='profile-down'>
                <img src={dp} alt=""/>
                <div className='profile-title'>AYUSH PATEL</div>
                <div className='profile-description'>
                    Profile : Software Engineer 
                </div>
                <div className='profile-description'>
                    Profile : Software Engineer 
                </div>
                <div className='profile-description'>
                    Profile : Software Engineer 
                </div>
             </div>
        </div>
    );
}

export default UserProfileCard;