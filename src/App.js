import './App.css';
import React, { useState } from "react";
import dp from './images/dp.jpeg'
import { Toggle } from '@fluentui/react/lib/Toggle';
import ToggleSidebar from './ToggleSidebar';
import UserProfileCard from './UserProfileCard/UserProfleCard';



function App() {
  const _Change = (e, checked) => {
    if (checked) {
      document.querySelector('body').setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('body').setAttribute('data-theme', 'light');
    }
  }
  return (
    <div className='app'>
      <div style={{ float: 'right' }}>
        <Toggle
          className='toggle'
          label="bgcolor"
          inlineLabel
          onText="On"
          offText="Off"
          onChange={_Change}
        />
      </div>
      <div className='leftsidePanel'>
        <UserProfileCard />
        <div className='buttonlist'>
          <div class="wrapper">
            <div class="button">
              <div class="icon">
                <i class="fab fa-facebook-f"></i>
              </div>
              <span>Facebook</span>
            </div>
            <div class="button">
              <div class="icon">
                <i class="fab fa-twitter"></i>
              </div>
              <span>Twitter</span>
            </div>
            <div class="button">
              <div class="icon">
                <i class="fab fa-instagram"></i>
              </div>
              <span>Instagram</span>
            </div>
            <div class="button">
              <div class="icon">
                <i class="fab fa-google"></i>
              </div>
              <span>Gmail</span>
            </div>
            <div class="button">
              <div class="icon">
                <i class="fab fa-youtube"></i>
              </div>
              <span>YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
