import React from 'react';
import './App.css';
import CampoBatalha from './components/questao01/Arena';
import World from './components/questao03/World';
import MostrarArena from './components/questao03/Arena';


function App() {
  return (
    <div className="App">
      <CampoBatalha/>
      <World>
        <MostrarArena arena = 'Konoha' namehero = 'Naruto ' nameenemy = 'Jigen' urlhero = 'https://i.pinimg.com/originals/88/6f/b7/886fb779913e7b50911d532aa4b20432.jpg' urlenemy = 'https://i.pinimg.com/originals/52/20/77/522077af7972e08b3954165944fb5e19.jpg'/>
        <MostrarArena arena = 'Kamuhakari' namehero = 'Yato' nameenemy = 'Bishamon' urlhero = 'https://pbs.twimg.com/profile_images/826599069636243457/Iq4eqnfx_400x400.jpg' urlenemy = 'https://i.pinimg.com/564x/51/a0/13/51a013d68670b04f6aa67376aaf39c3a.jpg'/>
        <MostrarArena arena = 'Marley' namehero = 'Eren'  nameenemy = 'Zeke' urlhero = 'https://vignette.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png/revision/latest?cb=20190327163909' urlenemy = 'https://vignette.wikia.nocookie.net/shingekinokyojin/images/4/40/Zeke_Jaeger_%28Anime%29_character_image.png/revision/latest?cb=20190513040614'/>
      </World>
       
    </div>
  );
}

export default App;
