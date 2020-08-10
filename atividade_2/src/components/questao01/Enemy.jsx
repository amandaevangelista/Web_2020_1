import React from 'react'

function Enemy (props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <img src={props.url} alt=""/>
        </div>
    )

}

export default Enemy