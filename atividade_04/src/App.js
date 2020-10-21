import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import List from './components/List';
import Inserir from './components/Inserir';
import Edit from './components/Edit';
import Home from './components/Main'
import Signin from './components/Signin'
import Signup from './components/Signup'

import { connect } from 'react-redux'



 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = 'container'>
          <nav className = 'navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className = 'navbar-brand'>Firebase Auth</Link>
            <div className = 'collapse navbar-collapse' id = 'navbarSupportedContent'>
              <ul className = 'navbar-nav mr-auto'>
                <li>
                  <Link to={'/'} className = 'nav-link'>Home</Link>
                </li>
                <li>
                  <Link to={'/signup'} className = 'nav-link'>Cadastrar</Link>
                </li>
                <li>
                  <Link to={'/signin'} className = 'nav-link'>Login</Link>
                </li>
                <li>
                  <Link to={'/inserir'} className = "nav-link">Inserir</Link>
                </li>
                <li>
                  <Link to={'/list'} className = "nav-link">Listar</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path='/' component = {Home} />
            <Route path='/signup' component = {Signup} />
            <Route path='/signin' component = {Signin} />
            <Route path='/inserir' component = {Inserir} />
            <Route path='/list' component = {List} />
            <Route path='/edit/:id' component = {Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


function mapStateToProps(state) {
  return{
    userLogado: state.authReducer.user
  }
   
}

export default connect(mapStateToProps)(App)
