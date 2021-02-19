import React, {useState,useEffect} from 'react';
import {get} from 'lodash';
import {FaGhost} from 'react-icons/fa';
import {useRouteMatch} from 'react-router-dom';
import api from '../../services/api';
import {Container, PokemonContent} from './styles'
/*
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
*/

interface PokemonData{
  order:  number;
  name: string;
  sprites:{
    front_default:string;
  }
}

interface PokemonParams{
  id: string;
}

const Pokemon: React.FC = () =>{
  const {params} = useRouteMatch<PokemonParams>()
  const [pokemon, setPokemon] = useState<PokemonData | null>({} as PokemonData);


  useEffect(() =>{

      api.get<PokemonData>(`/pokemon/${params.id}/`).then(response =>{

        setPokemon(response.data)
      })

     // api.get(`/pokemon/${params.id}/`).then(resposta =>{
       // setPokemonAttributes(resposta.data)

      // })


  },[params.id])


  return(
    <>
      <Container>
        <h1> Pokemon Info</h1>
        {pokemon && (
        <PokemonContent>
          <span> #{pokemon.order} </span>
          {get(pokemon,'sprites.front_default',false ) ? (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          ):(
            <FaGhost size={30} color="#fff" />
          )}
          <h2> {pokemon.name}</h2>
          <strong> Grass </strong>
        </PokemonContent>
      )}
      </Container>
    </>
  )
}

export default Pokemon;
