import React, { useState } from 'react';
import './App.css';
import AuthComponent from './components/auth/auth';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <div className="App">
      {!isSignedIn ? (
        <div>
          <p>Landing Page</p>
          <button onClick={() => setIsSignedIn(!isSignedIn)}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsSignedIn(!isSignedIn)}>Sign In</button>
          <AuthComponent />
        </div>
      )}
    </div>
  );
}

export default App;