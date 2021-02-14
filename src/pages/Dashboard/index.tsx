import React, {useState, FormEvent} from 'react';
import {FaHeart} from 'react-icons/fa';
import api from '../../services/api';
import {Title, Form, Pokemons, Error} from './styled';

interface PokemonTypes{
  type:{
    name: string;
  }
}
interface PokemonData{
  name: string;
  order: number;
  sprites:{
    front_default:string;
  }


  types: PokemonTypes[];
}
const Dashboard:React.FC = () =>{
  const [pokemons, setPokemons ] = useState<PokemonData[]>([]);
  const [inputText, setInputText ] = useState('');
  const [inputError, setInputError] = useState('');

 async function handleAddPokemon(e:FormEvent<HTMLFormElement>):Promise<void>{
    e.preventDefault();

    if(!inputText){
      setInputError('Por Favor informe o nome de um pokemon válido');
      return;
    }
    try{
      const response = await  api.get<PokemonData>(`/pokemon/${inputText}`);
      const pokemon = response.data;
      setPokemons([...pokemons, pokemon]);
      setInputText('')
      setInputError('');
    }catch(error){
      setInputError('Erro na busca por esse pokemon');
    }

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
      {inputError && <Error> {inputError}</Error>}
      {pokemons && (
      <Pokemons>
        {pokemons.map(pokemon =>(
          <div key={pokemon.order}>
            <header>
              <span>  #{pokemon.order} </span>
              <FaHeart size={20} />
            </header>
            <img src={pokemon.sprites.front_default} alt="Imagem de um pokemon" />
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
