
export default function (state = 0, action) {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, ...{ counter: state.counter + 1 } }
    case 'RESET':
      return { ...state, ...{ counter: 0 } }
  }
}
