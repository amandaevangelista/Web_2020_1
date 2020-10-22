import React, { Component } from 'react'
import Card from './Card'

import { connect } from 'react-redux'
import { signout } from '../store/actions/authActionCreator'

 class Signout extends Component {

    logout(){
        this.props.mySignout(
            () => {
                this.props.history.push('/signin')
            }
        )
    }

    render() {
        return (
            <Card title = 'Deslogar'>
                <button className = 'btn btn-danger' onClick = {() => this.logout()}>
                    Fazer logout
                </button>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.firebaseReducer.auth,
        authMsg: state.authReducer.authMsg,
        verified: state.authReducer.verified
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mySignout(callback) {
            const action = signout(callback)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signout)