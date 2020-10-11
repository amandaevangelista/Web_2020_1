import React, { Component } from 'react'
import { connect } from 'react-redux'

class  Maior extends Component{
    render(){
        return(
            <div>
              Maior: {Number(this.props.numero1) < Number(this.props.numero2) ? Number(this.props.numero2) : Number(this.props.numero1)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        numero1: state.numeros.numero1,
        numero2: state.numeros.numero2
    }
}

export default connect(mapStateToProps)(Maior)
