import { Component } from 'react';

import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import { FetchPokemon } from './services/pokemon-api';
// import YoutubeMagic from './PokemonPendingView';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idel',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      // console.log('змінилось імя покемона');
      this.setState({ status: 'pending' });

      FetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    // const { pokemonName } = this.props;

    if (status === 'idel') {
      return <div>Введіть імя покемона </div>;
    }
    if (status === 'pending') {
      return <PokemonPendingView />;
    }
    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
