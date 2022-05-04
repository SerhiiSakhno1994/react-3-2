import { Component } from 'react';
// import { ToastContainer} from 'react-toastify';

import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '',
  };
  handeleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', pagging: 20 }}>
        <PokemonForm onSubmit={this.handeleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
      </div>
    );
  }
}
