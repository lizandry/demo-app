import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

// code pulled from https://auth0.com/blog/complete-guide-to-react-user-authentication/
// allows app to access user conext and history

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();
  // accesses history object from react router
  
  const onRedirectCallback = (appState) => {
    // handles event where auth0 redirects users from login page to app
    history.push(appState?.returnTo || window.location.pathname);
  };
  
  return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;