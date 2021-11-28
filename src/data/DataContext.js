import React from "react"

// COMPONENTE CRIADO COM O ESTADO INICIAL DO "CONTEXT"

export const data = {
    number: 123,
    text: 'Context API...'
}

const DataContext = React.createContext(null)

export default DataContext