
export function addMessage(message) {
  return dispatch => {
    setTimeout(() => dispatch({ type: 'ADD_MESSAGE', message }), 2000)
  }
}