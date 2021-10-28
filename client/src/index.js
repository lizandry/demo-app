import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
  );
  
  // import { Auth0Provider } from "@auth0/auth0-react";
  // <Auth0Provider
  // // left over from initial auth0 react spa quickstart
  //   domain="dev-ggsfhixz.us.auth0.com"
  //   clientId="weTCIYU6f4IEOQSs3eGcoBbRAGuSCgo3"
  //   redirectUri={window.location.origin}
  //   // redirectUri={`http://localhost:3000/hello`}
  //   // TODO configure this with splash page
  // >
  //   <App />
  // </Auth0Provider>
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // import reportWebVitals from './reportWebVitals';
  // reportWebVitals();
  