    /* FUNÇÕES RELACIONADAS A NÚMEROS */
export function numberReducer(state, action) {
    switch (action.type) {
        case 'addNumber':
            return { ...state, number: state.number + 1 }
        case 'multiNumber':
            return { ...state, number: state.number * 7 }
        case 'divNumber':
            return { ...state, number: state.number / 25 }
        case 'intNumber':
            return { ...state, number: parseInt(state.number) }
        case 'nNumber':
            return { ...state, number: state.number + action.payload }
        default:
            return state
    }
}