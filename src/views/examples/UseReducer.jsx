import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { addNumber, login } from '../../store/actions'

/*          >>>>>>>>>>>>> useReducer <<<<<<<<<<<<< 
    RECEBE A VERSÃO MAIS ATUAL DO ESTADO E UMA AÇÃO, TODA AÇÃO 
    TERÁ UM TIPO E A PARTIR DELA SABEREMOS COMO ALTERAR O ESTADO.
 */

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
                        onClick={() => login(dispatch, 'Cesar')}>Login</button>
                    <button className="btn"
                        onClick={() => addNumber(dispatch)}>+1</button>
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
