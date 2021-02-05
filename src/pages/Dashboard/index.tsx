import React, {useState, FormEvent} from 'react';
import {FaHeart} from 'react-icons/fa';
import api from '../../services/api';
import {Title, Form, Pokemons} from './styled';

interface PokemonTypes{
  type:{
    name: string;
  }
}
interface PokemonData{
  name: string;
  order: number;
  types: PokemonTypes[];
}
const Dashboard:React.FC = () =>{
  const [pokemons, setPokemons ] = useState<PokemonData[]>([]);
  const [inputText, setInputText ] = useState('');

 async function handleAddPokemon(e:FormEvent<HTMLFormElement>):Promise<void>{
    e.preventDefault();
    const response = await  api.get<PokemonData>(`/pokemon/${inputText}`);
    const pokemon = response.data;
    setPokemons([...pokemons, pokemon]);

  }


  return(
    <>
      <Title>  Pokedex </Title>
      <Form onSubmit={handleAddPokemon}>
        <input
          type="text"
          placeholder="Informe o nome do pokemon"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit"> Pesquisar</button>
      </Form>
      {pokemons && (
      <Pokemons>
        {pokemons.map(pokemon =>(
          <div key={pokemon.order}>
            <header>
              <span>  #{pokemon.order} </span>
              <FaHeart size={20} />
            </header>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.order}.png`} alt="Imagem de um pokemon" />
            <strong>{pokemon.name}</strong>
            <button type="button"> {pokemon.types[0].type.name} </button>
          </div>
       ))}
      </Pokemons>
       )}
    </>
  )
}


export default Dashboard;
