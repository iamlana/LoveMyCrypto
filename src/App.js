import React from 'react';
import './App.css';
import { Home } from './components/Home'
import { AllCurrencies } from './components/AllCurrencies'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/coins" exact component={AllCurrencies} />
      </Switch>
    </Router>
  );
}

export default App;
