import { createStore, combineReducers} from 'redux'
import numeroReducer from './reducers/numerosreducers'

const reducers = combineReducers (
    {
        numeros:  numeroReducer
           
        }
)

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig