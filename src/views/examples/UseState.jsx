import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

/*             >>>>>>>>>>>>> useState <<<<<<<<<<<<<
    Um componente funcional que tem seu estado inicial e através 
    de um método é possível atualizar esse estado.
*/

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Inicial...")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!" />

            {/* >>>>>>>>>>>>> PARTE 1 <<<<<<<<<<<<< */}
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                        onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn"
                        onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn"
                        onClick={() => setCount(currect => currect + 1000)}>+1000</button>
                </div>
            </div>

            {/* >>>>>>>>>>>>> PARTE 2 <<<<<<<<<<<<< */}
            <SectionTitle title="Exercício #02" />

            <input type="text" className="input" 
                value={name} onChange={e => setName(e.target.value)} />
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
