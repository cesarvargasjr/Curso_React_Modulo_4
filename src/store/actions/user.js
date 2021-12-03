export function login(dispatch, name) {
    dispatch({ type: 'login', payload: name }) /* "dispatch" e "payload" SÃO AS NOMENCLATURAS MAIS USADAS PARA ESSES CASOS */
}
