 import './App.css';
 import React, { useState } from "react";
 import dp from './images/dp.jpeg'
 import { Toggle } from '@fluentui/react/lib/Toggle';

 

function App() {
   const _Change=(e,checked)=>{
    if(checked){
      document.querySelector('body').setAttribute('data-theme','dark');
     }else{
      document.querySelector('body').setAttribute('data-theme','light');
     }
  }
  return (
    <div>
      <div style={{float:'right'}}>
      <Toggle
          className='toggle'
          label="bgcolor"
          inlineLabel
          onText="On"
          offText="Off"
          onChange={_Change} 
        />
      </div>
      <div className="App">     
        <div className="leftPanel">
            <img src={dp} className="profilePhoto"/>
        </div>
        <div className="rightPanel">
          <div><h1 style={{padding:0}}> Ayush Patel</h1></div>
          <div><h4>IT Sector</h4></div>
          <div><h4>ayu.ayushpatel@gmail.com</h4></div>
          <div><h4>INDIA</h4></div>
        </div>
      </div>
    </div>
  );
}

export default App;
