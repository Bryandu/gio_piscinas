import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Home from "./pages/home/home";
import Loja from "./pages/loja/loja";

function App() {
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
