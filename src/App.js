import React from 'react';
import './App.css';
import { LoginPage } from './LoginPage';
import { CartPage } from './CartPage';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/cart'>
            <CartPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
