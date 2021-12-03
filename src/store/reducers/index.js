/* CHAMANDO AS FUNÇÕES QUE ESTÃO SEPARADAS EM "functionsNumber" e "user" */
import { numberReducer } from "./functionsNumber"
import { userReducer } from "./user"

export function reducer(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)
}

export default reducer