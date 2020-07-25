import React from 'react';
import './App.css';
import { Home } from './components/Home'
import { FavoritesProvider } from './components/useFavorites';
import { Board } from './components/Board'
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
        <Route path="/coins" exact component={Board} />
      </Switch>
    </Router>
    </FavoritesProvider>
  );
}

export default App;
