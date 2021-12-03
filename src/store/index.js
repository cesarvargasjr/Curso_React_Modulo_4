import { reducer } from './reducers'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0   // ATRIBUTO PRINCIPAL PARA A ATIVIDADE
}

export {
    reducer,
    initialState 
}