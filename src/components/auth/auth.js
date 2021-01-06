import React from "react";
import "./auth.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function AuthComponent() {
  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(AuthComponent);
