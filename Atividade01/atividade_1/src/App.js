import React from 'react';
import './App.css';
import Exibir from './components/questao1/questao1';
import Informacao from './components/questao2/questao2';
import Dados from './components/questao3/questao3pai';
import Aluna from  './components/questao4/questao4pai';


function App () {
  return (
    <div className="App">
      <Exibir/>
      <Informacao/>
      <Dados/>
      <Aluna/>
    </div>
  );
}

export default App;
