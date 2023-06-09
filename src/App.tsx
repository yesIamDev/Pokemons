import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemons-list";
import { Router, Switch } from "react-router";
import { Link } from "react-router-dom";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        {/* la barre de navigation commune a toutes les pages */}
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">Pokedex</Link>
          </div>
        </nav>
        {/* systeme de gestion des routes dans notre application */}
        
      </div>
    </Router>
  )
};

export default App;
