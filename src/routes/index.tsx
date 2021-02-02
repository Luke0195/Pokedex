import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashbord from '../pages/Dashboard';
import Pokemon from '../pages/Pokemon';


const Routes:React.FC  =() =>{
  return(
    <>
      <Switch>
        <Route component={Dashbord} path="/" exact  />
        <Route component={Pokemon} path="/pokemon" />
      </Switch>

    </>
  )
}

export default Routes;
