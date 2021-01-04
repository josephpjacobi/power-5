import React from 'react';
import './App.css';
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);


function App() {

  return (
    <div>
      <div className="nav-bar">
        <div className="nav-item">Home</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Sign Up / Login</div>
      </div>
      <div className="login-signup-form">

      </div>
    </div>
  );
}
export default App;