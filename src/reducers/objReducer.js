
export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_OBJ':
      return { ...state, added: action.payload }
    default:
      return state
  }
}
