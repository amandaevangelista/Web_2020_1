

const initialState = {
    numero1:0,
    numero2: 0
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case'NOVO_NUMERO1':
        return {
            ...state,
            numero1: action.payload
        }
        case'NOVO_NUMERO2':
        return {
            ...state,
            numero2: action.payload
        }

        default:
            return state

    }

}