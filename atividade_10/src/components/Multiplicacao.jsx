import React, { Component } from 'react'
import { connect } from 'react-redux'

class  Multiplicacao extends Component{
    render(){
        return(
            <div>
                Multiplicação: {this.props.numero1 * this.props.numero2}
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

export default connect(mapStateToProps)(Multiplicacao)