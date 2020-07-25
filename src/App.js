import React from 'react';
import './App.css';
import { Home } from './components/Home'
import { FavoritesProvider } from './components/useFavorites';
import { Coins } from './components/Coins'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/coins" exact component={Coins} />
        </Switch>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
