import React from 'react';
import ReactDOM from 'react-dom';
import { Connect, query } from 'urql';

const PokemonCard = () => (
  <Connect
    query={query(MyQuery)}
    render={({ loaded, fetching, refetch, data, error }) => {
      console.log(data);

      return loaded ? (
        <div>
          <h3>{data.pokemon.name}</h3>
          <p>Evolutions that it went through - </p>
          <ul>
            {data.pokemon.evolutions.map(e => <li key={e.id}>{e.name}</li>)}
          </ul>
        </div>
      ) : (
        <div>loading...</div>
      );
    }}
  />
);

const MyQuery = `
  query {
    pokemon(name: "Pikachu") {
      name
      evolutions {
        id
        name
      }
    }
  }
`;

export default PokemonCard;
