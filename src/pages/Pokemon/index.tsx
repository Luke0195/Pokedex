import React, {useState,useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom'
import api from '../../services/api';
import {Container, PokemonContent, PokemonStatus} from './styles'

interface PokemonState{
  order: number;
  base_stat: number,
  stat:{
    name: string;
  }
  type:{
    name: string;
  }
}

interface PokemonData{
  order:  number;
  name: string;
}

interface PokemonParams{
  id: string;
}

const Pokemon: React.FC = () =>{
  const {params} = useRouteMatch<PokemonParams>()
  const [pokemon, setPokemon] = useState<PokemonData | null>({} as PokemonData);
  const [pokemonAttributes, setPokemonAttributes] = useState<PokemonState []>([])

  useEffect(() =>{
      api.get<PokemonData>(`/pokemon/${params.id}/`).then(response =>{
        setPokemon(response.data)
      })

      api.get(`/pokemon/${params.id}/`).then(resposta =>{
        setPokemonAttributes(resposta.data)

      })


  },[params.id])


  return(
    <>
      <Container>
        <h1> Pokemon Info</h1>
        {pokemon && (
        <PokemonContent>
          <span> #{pokemon.order} </span>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${String(pokemon.order)}.png`} alt=" pokemon" />
          <h2> {pokemon.name}</h2>
          <strong> Grass </strong>



        </PokemonContent>
        )}
      </Container>
    </>
  )
}

export default Pokemon;
