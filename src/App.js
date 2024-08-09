import './App.css';
import { useState } from 'react';

function App() {

  let [menuStatus,setMenuStatus] = useState(false);

  let [modelStatus,setModelStatus] = useState(false);

  return (
    <div className="App">
      
      <button className='menuOpenBtn' onClick={()=>{setMenuStatus(!menuStatus)}}> 
        &#9776;        
      </button>
      
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
      <button className='menuCloseBtn' onClick={()=>{setMenuStatus(!menuStatus)}}>
        &times;
      </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallary</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <button className='loginBtn' onClick={()=>setModelStatus(!modelStatus)}>Login</button>

      <div className={`modelOverlay ${modelStatus ? 'showModelOverlay' : ''}`}>
        <div className={`login ${modelStatus ? 'showLogin' : ''}`}>
          <div className='loginTitle'>
            Login
          </div>
          <button className='modelCloseBtn' onClick={()=>{setModelStatus(!modelStatus)}}>
            &times;
          </button> <br/>
          <div className='loginContainer'>
            Name:<br/><input type='text'/> <br/>
            Email:<br/><input type='email'/> <br/>
            Password:<br/><input type='password'/> <br/>
            Confirm Password:<br/><input type='password'/> <br/>
            <button className='submitBtn'>Submit</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

