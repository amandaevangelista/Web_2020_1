import React from 'react'
import Hero from './Hero'
import Enemy from './Enemy'
import {HeroURL} from './imagens'
import {EnemyURL} from './imagens'

function CampoBatalha(props) {
    return (
        <div id='imagem_arena'>
            <Hero name='Clark Kent' url={HeroURL}/>

            <Enemy name='Darkseid' url={EnemyURL}/>
        </div>
    )



}

export default CampoBatalha