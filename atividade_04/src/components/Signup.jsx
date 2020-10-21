import React, { Component } from 'react'
import Card from './Card'

import { connect } from 'react-redux'
import { signup } from '../store/actions/authActionCreator'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = { login: '', password: '' }
        this.setLogin = this.setLogin.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setLogin(e) {
        this.setState({ login: e.target.value })
    }

    setPassword(e) {
        this.setState({ password: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()
        this.props.mySignup(this.state.login, this.state.password)
        this.setState = ({ login: '', password: '' })
    }



    render() {
        return (
            <Card title='Cadastrar'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Login:</label>
                        <input type='text' className='form-control'
                            value={this.state.login}  onChange={(e) => this.setLogin(e)} />
                    </div>

                    <div className='form-group'>
                        <label>Password:</label>
                        <input type='password' className='form-control'
                            value={this.state.password} onChange={(e) => this.setPassword(e)} />
                    </div>

                    <input type='submit' value='Cadastrar' className='btn btn-primary' />

                </form>

                <div className = 'alert alert-info' style = {{marginTop : '10px'}}>
                    {this.props.userMsg}
                </div>

            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        userMsg: state.authReducer.authMsg
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mySignup(login, password) {
            const action = signup(login, password)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
