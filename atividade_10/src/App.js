import React, { Component } from 'react'
import './App.css'

import Numero1 from './components/Num1'
import Numero2 from './components/Num2'
import Maior from './components/Maior'
import Soma from './components/Soma'
import Multiplicação from './components/Multiplicacao'

export default class App extends Component{
  render() {
    return(
      <div className='container'>
        <h1>Calculadora</h1>
        <br></br>
        <div className='line'>
          <Numero1/>
          <Numero2/>
        </div>
        <div className='line'>
          <Soma/>
          <Multiplicação/>
          <Maior/>
        </div>
      </div>
    )
  }
}