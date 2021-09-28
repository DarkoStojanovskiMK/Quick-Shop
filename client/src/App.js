import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import Navbar from './components/layout/Navbar';
import Backdrop from './components/layout/Backdrop';
import SideDrawer from './components/layout/SideDrawer';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';
import store from './store';
import './App.css';


function App() {

  const [siteToggle, setSiteToggle] = useState(false)

  return (
    <Provider store={store}>
      <Router>
        <Navbar click={()=>setSiteToggle(true)}/>
        <Backdrop show={siteToggle} click={()=>setSiteToggle(false)}/>
        <SideDrawer show={siteToggle} click={()=>setSiteToggle(false)}/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/cart' component={CartPage}/>
            <Route exact path='/product/:id' component={ProductPage}/>
            <Route path='*' component={ErrorPage}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
