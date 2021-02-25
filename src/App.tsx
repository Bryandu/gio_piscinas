import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Adm from "./pages/adm/adm";
import Home from "./pages/home/home";
import Loja from "./pages/loja/loja";
import firebase from "firebase";
import { firebaseConfig } from "./firebaserc";

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/loja">
          <Loja />
        </Route>
        <Route path="/adm">
          <Adm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
