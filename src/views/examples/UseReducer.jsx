import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

/*          >>>>>>>>>>>>> useReducer <<<<<<<<<<<<< 
    RECEBE A VERSÃO MAIS ATUAL DO ESTADO E UMA AÇÃO, TODA AÇÃO 
    TERÁ UM TIPO E A PARTIR DELA SABEREMOS COMO ALTERAR O ESTADO.
 */

const initialState = {
    other: [],
    products: [],
    user: null,
    number: 0   // ATRIBUTO PRINCIPAL PARA A ATIVIDADE
}

/* EXEMPLO DE UMA ÚNICA FUNÇÃO PARA TRABALHAR COM OS OBJETOS, 
MAS PODE-SE FAZER COM FUNÇÕES SEPARADAS. */
function reducer(state, action) {
    switch (action.type) {
        case 'addNumber':
            return { ...state, number: state.number + 2 }
        case 'multiNumber':
            return { ...state, number: state.number * 7 }
        case 'divNumber':
            return { ...state, number: state.number / 25 }
        case 'intNumber':
            return { ...state, number: parseInt(state.number) }
        case 'nNumber':
            return { ...state, number: state.number + action.payload }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário!</span>
                }

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Cesar Vargas Jr' })}>Login</button>  {/* "dispatch" e "payload" SÃO AS NOMENCLATURAS MAIS USADAS PARA ESSES CASOS */}
                    <button className="btn"
                        onClick={() => dispatch({ type: 'addNumber' })}>+1</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'multiNumber' })}>x7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'divNumber' })}>/2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'intNumber' })}>int</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'nNumber', payload: -5 })}>-5</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'nNumber', payload: +5 })}>+5</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
