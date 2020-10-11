import React, { Component } from 'react'

import { connect } from 'react-redux'
import { alterarNumero2 } from '../store/actions/numeroActionCreator'

class Numero2 extends Component {
    render() {
        return (
            <div className='numbers'>
                Número 2 =
                <input type="number" value={this.props.numero2} className="numero" onChange={(e) => this.props.modificarNumero2(e.target.value)} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        numero2: state.numeros.numero2
    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        modificarNumero2(novoNumero2) {
            const action = alterarNumero2(novoNumero2)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapActionCreatorToProps)(Numero2)
