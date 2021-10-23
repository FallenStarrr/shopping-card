import './index.css'
import React, { useState } from 'react-redux'
import { ShopList }  from './components/ShopList'
import { createStore } from 'redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'
import Basket from './components/Basket';




function App() {
  

  return (
    <Router>
        <Link className="nav" to="/shop">Shopping</Link>
        <Link  className="nav" to="/basket">Basket</Link>


<Switch>
        <Route path="/shop">
          <ShopList/>
        </Route>

        <Route path="/basket">
              <Basket/>
        </Route>
</Switch>
    </Router>
    
  );
}

export default App;
