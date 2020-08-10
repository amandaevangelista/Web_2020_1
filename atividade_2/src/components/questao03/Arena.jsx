import React from 'react'
import Hero from './Hero'
import Enemy from './Enemy'
import 'bootstrap/dist/css/bootstrap.css';

function MostrarArena(props) {
    return (
        <div>
            <div>
            <button type="button" class="btn btn-outline-dark"><h2>{props.arena}</h2></button>
               
            </div>
            <div id= 'combatearena'>
                <Hero name={props.namehero} url={props.urlhero} />
                <Enemy name={props.nameenemy} url={props.urlenemy} />

            </div>
        </div>


    )
}

export default MostrarArena