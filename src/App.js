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

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "first_name",
            label: "First Name",
            placeholder: "First Name",
            required: true,
          },
          {
            type: "last_name",
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