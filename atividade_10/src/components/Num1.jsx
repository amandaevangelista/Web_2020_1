import React, { Component } from 'react'

import { connect } from 'react-redux'
import { alterarNumero1 } from '../store/actions/numeroActionCreator'

class Numero1 extends Component {
    render() {
        return (
            <div className='numbers'>
                Número 1 = 
                <input type="number" value={this.props.numero1} className="numero" onChange={(e) => this.props.modificarNumero1(e.target.value)} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        numero1: state.numeros.numero1
    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        modificarNumero1(novoNumero1) {
            const action = alterarNumero1(novoNumero1)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapActionCreatorToProps)(Numero1)
