import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./components/Home";
import Messages from "./components/Messages";
import Wishlist from "./components/Wishlist";
import Settings from "./components/Settings";
import Account from "./components/Account";
import Header from "./components/Header";
import axios from "axios";
import "./App.css";

function App() {
  const [travels, saveTrips] = useState([]);
  const [reloadTrips, updateTrips] = useState(true);

  useEffect(() => {
    if (reloadTrips) {
      const consultarAPI = async () => {
        //check the json-server API
        const response = await axios.get("http://localhost:4000/travel");
        saveTrips(response.data);
      };

      consultarAPI();

      //change to false reloadtrips
      updateTrips(false);
    }
  }, [reloadTrips]);

  return (
    <Router>
      <Header />
      <main className="container__main">
        <Switch>
          <Route
            exact
            path="/home"
            render={() => <Home travels={travels} updateTrips={updateTrips} />}
          />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
