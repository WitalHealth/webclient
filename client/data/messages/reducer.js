export default function messages(state = [], action = {}) {
  console.log('reducer', action.message);
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state, action.message
      ];
    default:
      return state;
  }
}