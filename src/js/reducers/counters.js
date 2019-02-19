const initialState = [0];

const counters = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return state.concat(0);
    case 'INCREMENT':
      return state.map((c, i) => i === action.index ? c + 1 : c)
    case 'DECREMENT':
      return state.map((c, i) => i === action.index ? c - 1 : c)
    default:
      return state;
  }
}

export default counters;
