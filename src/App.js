import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import Home from './Home';
import Login from "./auth/Login";
import Dashboard from "./admin/Dashboard";
import ProductReview from "./ProductReview";
import Analysis from "./admin/Analysis";

function App() {

  return (
      <div>
        <Router>
          <Switch>
            <Route exact path = '/' component = { Home }/>
            <Route exact path = '/admin'  component = { Login }/>
              <Route exact path = '/logout' component = { Login }/>
            <Route exact path = '/dashboard'  component = { Dashboard }/>
            <Route exact path ='/analysis'  component = { Analysis }/>
              <Route exact path =  '/products'  component = { Analysis }/>
            <Route exact path='/product-review' component = { ProductReview }/>
          </Switch>
        </Router>
      </div>
  );
}


export default App;
