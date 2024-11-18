 import './App.css';
 import profilephotos from './images/profilephotos.png'

function App() {
  return (
    <div className="App">
       <div className="leftPanel">
          <img src={profilephotos} className="profilePhoto"/>
       </div>
       <div className="rightPanel">
        <div><h1 style={{padding:0}}> Ayush Patel</h1></div>
        <div><h4>IT Sector</h4></div>
        <div><h4>ayu.ayushpatel@gmail.com</h4></div>
        <div><h4>INDIA</h4></div>
       </div>
    </div>
  );
}

export default App;
