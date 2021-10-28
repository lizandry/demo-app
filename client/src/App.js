import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// import NavBar from "./components/NavBar";

// import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Loading from './components/auth0/Loading'
// import { Home, Profile, ExternalApi } from "./views";
// import ProtectedRoute from "./auth/protected-route";

// import LoginButton from './components/auth0/LoginButton'
// import LogoutButton from './components/auth0/LogoutButton'

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
    </div>
  );
}
      // <div className="container flex-grow-1">
      //   <Switch>
      //     {/* {/* <Route path="/" exact component={Home} /> */}
      //     <Route path="/profile" component={Profile} />
      //     <Route path="/external-api" component={ExternalApi} /> */}
      //   </Switch>
      // </div>
      // <Footer />

export default App;
