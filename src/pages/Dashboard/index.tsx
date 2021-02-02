import React from 'react';
import {Title, Form} from './styled';

const Dashboard:React.FC = () =>{
  return(
    <>
      <Title>  Pokedex </Title>
      <Form>
        <input type="text" placeholder="Informe o nome do pokemon" />
        <button type="submit"> Pesquisar</button>
      </Form>
    </>
  )
}


export default Dashboard;
