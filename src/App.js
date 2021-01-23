import React, { useState } from 'react';
import './App.css';
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';


function App() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  const logAttrbiutes = (user) => {
    console.log(`user: ${Object.keys(user.attributes)}`);
  }

  return authState === AuthState.SignedIn && user ? (
    // custom:last_name,email_verified,custom:first_name,phone_number_verified,phone_number,email
    <div className="App">
      <div>Hello, {user.username}</div>
      <div>First Name: {user.attributes["custom:first_name"]}</div>
      <div>Last Name: {user.attributes["custom:last_name"]}</div>
      <div>Phone Number: {user.attributes.phone_number}</div>
      <div>Email: {user.attributes.email}</div>
      <button onClick={() => logAttrbiutes(user)}>User Attributes</button>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "custom:first_name",
            label: "First Name",
            placeholder: "First Name",
            required: true,
          },
          {
            type: "custom:last_name",
            label: "Last Name",
            placeholder: "Last Name",
            required: true,
          },
          {
            type: "email",
            label: "Email Address",
            placeholder: "Email",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Password",
            required: true,
          },
          {
            type: "phone_number",
            label: "Phone Number",
            placeholder: "Phone Number",
            required: false,
          },
        ]}
      />
      <AmplifySignIn headerText="Power5 Sign In" slot="sign-in" />
    </AmplifyAuthenticator>
  );
}

export default App;