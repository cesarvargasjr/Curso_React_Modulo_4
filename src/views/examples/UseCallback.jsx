import React, { useCallback } from 'react'
import { useState } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButton'

/*       >>>>>>>>>>>>> useCallback <<<<<<<<<<<<<
    UTILIZADO PARA CHAMAR VÁRIAS VEZES A MESMA FUNÇÃO, 
    SEM A NECESSIDADE DE RENDERIZÁ-LA TODA VEZ QUE FOR CHAMADA 
 */

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta)
    }, [setCount])

    /*  FUNCÃO INICIAL SEM UTILIZAR useCallback:
        
        function inc(delta) {
        setCount(count + delta)
    } */

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!" />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
