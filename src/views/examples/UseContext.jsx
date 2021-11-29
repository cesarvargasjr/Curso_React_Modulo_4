import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

/*             >>>>>>>>>>>>> useContext <<<<<<<<<<<<<
   Permite utilizar o Context passando o state entre os componentes
   de forma mais fácil e rápida, não é necessário acessar vários 
   componentes para acessar o desejado. 
*/

const UseContext = (props) => {

    const { state, setState } = useContext(DataContext)

    function addNumber(delta) {
        setState({
            ...state,
            number: state.number + delta
        })
    }

    // PARTE 2: CONTEXT API + HOOKS
    const { number, text, setNumber } = useContext(AppContext)

    /* >>>>> useEffect COM ALERTA APÓS PASSAR 992 <<<<<
    
    useEffect(function () {
        if (number > 992) {
            setText('Effect!!!')
        }
    }, [number]) */

    return (
        <div className="UseConstatetext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!" />

            {/* >>>>>>>>>>>>> PARTE 1 <<<<<<<<<<<<< */}
            <SectionTitle title="Parte 01:" />
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn"
                        onClick={() => addNumber(+1)}>+1</button>
                </div>
            </div>

            {/* >>>>>>>>>>>>> PARTE 2 <<<<<<<<<<<<< */}
            <SectionTitle title="Parte 02:" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                        onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn"
                        onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
