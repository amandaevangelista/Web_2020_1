import React from 'react'

function Hero (props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <img src={props.url} alt=""/>
        </div>
    )

}

export default Hero
