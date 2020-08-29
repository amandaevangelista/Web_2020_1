import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import List from './components/List';
import Home from './components/Home';
import Inserir from './components/Inserir';
import Edit from './components/Edit';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Home</Link>
            <Link to={'/inserir'} className="navbar-brand">Inserir</Link>
            <Link to={'/list'} className="navbar-brand">Listar</Link>
            </nav>


            
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/inserir' component={Inserir} />
            <Route path='/list' component={List} />
            <Route path='/edit/:id' component={Edit} />

            </Switch>

        </div>
      </Router>
    );
  }
}
