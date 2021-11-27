import React from "react"

// COMPONENTE CRIADO PARA OS BOTÕES "CONTADOR"
// CHAMADA NO COMPONENTE "UseCallback" 

const UseCallbackButtons = (props) => {
    console.log('render.....')
    
    return (
        <div>
            <button className="btn"
                onClick={() => props.inc(6)}>+6</button>
            <button className="btn"
                onClick={() => props.inc(12)}>+12</button>
            <button className="btn"
                onClick={() => props.inc(18)}>+18</button>
        </div>
    )
}

// export default UseCallbackButtons

export default React.memo(UseCallbackButtons)   // NECESSÁRIO UTILIZAR O "React.memo", SENÃO USAR A FUNÇÃO VAI SER RENDERIZADA TODA VEZ QUE CHAMADA