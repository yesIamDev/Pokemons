import { FunctionComponent } from "react";
import PokemonList from "./pages/pokemons-list";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PokemonsDetail from "./pages/pokemon-details";
import PageNotFound from "./pages/page-not-found";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        {/* la barre de navigation commune a toute l'application */}
        <nav className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">
            Pokedex
          </Link>
        </nav>
        {/** systeme de gestion des routes de notre application  */}
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route path="/pokemons/:id" component={PokemonsDetail} />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
