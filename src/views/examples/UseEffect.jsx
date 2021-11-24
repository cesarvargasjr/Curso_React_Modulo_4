import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        if (fatorial > 100000) {
            document.title = "TÍTULO ALTERADO!"
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="EXERCÍCIO #01 " />
            
            <div className="center">
                <div>
                    <span className="text"> Fatorial: </span>
                    <span className="text red"> {fatorial === -1 ? 'Não existe' : fatorial} </span>
                </div>
                <input type="number" className="input"
                    value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="EXERCÍCIO #02 " />
            <div className="center">

            </div>
        </div>
    )
}

export default UseEffect
