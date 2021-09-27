import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import pages
import Home from './Home';
import Login from "./auth/Login";
import Dashboard from "./admin/Dashboard";
import ProductReview from "./ProductReview";
import Analysis from "./admin/Analysis";

function App() {

  return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path = {['/'] } component = { Home }/>
            <Route exact path = {['/admin'] } component = { Login }/>
              <Route exact path = {['/logout'] } component = { Login }/>
            <Route path = { '/dashboard' } component = { Dashboard }/>
            <Route path = { '/analysis' } component = { Analysis }/>
              <Route path = { '/products' } component = { Analysis }/>
            <Route path = { '/product-review' } component = { ProductReview }/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}


export default App;
