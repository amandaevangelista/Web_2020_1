import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS, SIGNOUT_ERROR, EMAIL_NOT_VERIFIED,RESET_AUTH_MSG} from './actionsTypes'
import firebase from '../../utils/Firebase'


const auth = firebase.getAuth()

export const signup = (email, password) => {
    return dispatch => {
        try {
             auth
            .createUserWithEmailAndPassword(email, password)
            .then(
                () => {
                    auth.onAuthStateChanged(
                        (user) => {
                            user.sendEmailVerification();
                        });
                }
            )
            .then(
                () => {
                    auth.onAuthStateChanged(
                            (user) => {
                                if (user) {
                                    dispatch({
                                        type: SIGNUP_SUCCESS,
                                        payload: {
                                            authMessage: `Cadastro efetuado com sucesso! Verifique seu email`,
                                            userMail: user.email,
                                            verified: false
                                        }
                                            
                                    })
                                }
                                else{
                                    dispatch({
                                        type: SIGNUP_ERROR,
                                        payload: { authMessage: `Não foi possível se conectar!` }
                                    })
                                }
                            }
                        )
                    }
                )
                .catch(
                    (error) => {
                        dispatch({
                            type: SIGNUP_ERROR,
                            payload: { authMessage: `Erro na criação do usuário: ${error}` }
                        })
                    }
                )
        }
        catch (error) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: { authMessage: `Erro na conexão com o firebase: ${error}` }
            })
        }
    }

}

export const signin = (email, password, callback) => {
    return dispatch => {
        try{
            auth
            .signInWithEmailAndPassword(email, password)
            .then(
                (data) => {
                    if(!data.user.emailVerified){
                        dispatch({
                            type: EMAIL_NOT_VERIFIED,
                            payload: {
                                authMessage: `E-mail não verificado. Veja sua caixa de e-mail.`,
                                verified: false
                            }
                        })
                    }
                    else{
                        dispatch({
                            type: SIGNIN_SUCCESS,
                            payload: { authMessage: `Login efetuado com sucesso!`,
                            userMail: data.user.email,
                            verified:true
                         }
                            
                        })
                    }
                    
                    callback()
                }
            )
            .catch(
                (error) => {
                    dispatch({
                        type: SIGNIN_ERROR,
                        payload: { authMessage: `Erro no login do usuário: ${error}` }
                    })
                    callback()
                }
            )
        }
        catch(error){
            dispatch({
                type: SIGNIN_ERROR,
                payload: { authMessage: `Erro na conexão com o firebase: ${error}` }
            })
            callback()
        }
    }
}

export const signout = (callback) => {
    return dispatch =>{
        try{
            auth
            .signOut()
            .then(
                () => {
                    dispatch({
                        type: SIGNOUT_SUCCESS,
                        payload: { authMessage: `Logout efetuado com sucesso`,
                        verified: false
                     }

                    })
                    callback()
                }
            )
            .catch(
                (error) => {
                    dispatch({
                        type: SIGNOUT_ERROR,
                        payload: { authMessage: `Erro no logout: ${error}` }
                    })
                    callback()
                }
            )
        }
        catch(error){
            dispatch({
                type: SIGNOUT_ERROR,
                payload: { authMessage: `Erro na conexão com o firebase: ${error}` }
            })
            callback()
        }
    }
}

export const resetAuthMsg = () => {
    return {
        type: RESET_AUTH_MSG
    }
}

