import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import Cardlist from "../Components/Cardlist";
import Productlist from "../Components/Productlist";
import Herobanner from "../Components/Herobanner";
import Checkout from "../Components/Checkout";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/">
            <Herobanner />
            <Cardlist />

            <Productlist />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
