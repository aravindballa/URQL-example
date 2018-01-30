import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import PokemonCard from './PokemonCard';
import { Provider, Client } from 'urql';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const client = new Client({
  url: 'https://graphql-pokemon.now.sh/'
});

export const App = () => (
  <Provider client={client}>
    <div style={styles}>
      <Hello name="here is a pokemon" />
      <PokemonCard />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
