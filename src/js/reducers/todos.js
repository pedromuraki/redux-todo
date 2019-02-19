const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat({
        content: action.content,
        isDone: false
      });

    case 'REMOVE_ITEM':
      return state.filter((_, i) => i !== action.index);

    case 'CHECK_ITEM':
      return state.map((item, i) => i === action.index ? { ...item, isDone: true } : item);
  }
  return state;
}

export default todos;

// const renderItems = (filter) => {
//   if (!filter) return todos.map((item, i) => <Item key={} index={i} />);

//   return todos.map((item, i) => {
//     if
//   })
// }
