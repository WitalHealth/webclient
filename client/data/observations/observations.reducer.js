export default function observations( state = [], action = {} ) {
  switch (action.type) {
    case "GET_OBSERVATIONS":
      return action.observations;
    default:
      return state;
  }
}