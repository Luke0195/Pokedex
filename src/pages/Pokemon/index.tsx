import React from 'react';
import {Container, PokemonContent, PokemonStatus} from './styles'



const Pokemon: React.FC = () =>{


  return(
    <>
      <Container>
        <h1> Pokemon Info</h1>
        <PokemonContent>
          <span> #01 </span>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt=" pokemon" />
          <h2> Bulbasur</h2>
          <strong> Grass </strong>
          <PokemonStatus>
            <h1> Status</h1>
            <ul>
              <li>
                <strong> hp </strong>
                <p> 38</p>
              </li>

              <li>
                <strong> attack </strong>
                <p> 48</p>
              </li>

              <li>
                <strong> speed</strong>
                <p> 52 </p>
              </li>
            </ul>
          </PokemonStatus>
        </PokemonContent>
      </Container>
    </>
  )
}

export default Pokemon;
