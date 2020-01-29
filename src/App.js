import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Soldout from './pages/Soldout'
import Success from './pages/Success'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/success'>
        <Success />
      </Route>
      <Route path='/Soldout'>
        <Soldout />
      </Route>
    </Switch>
  )
}

export default App;
