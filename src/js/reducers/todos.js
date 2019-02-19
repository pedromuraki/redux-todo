const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat({
        content: action.content,
        status: 'to-do'
      });

    case 'REMOVE_ITEM':
      return state.filter((_, i) => i !== action.index);

    case 'CHECK_ITEM':
      return state.map((item, i) => i === action.index ? { ...item, status: 'is-done' } : item);
  }
  return state;
}

export default todos;

// const renderItems = (filter) => {
//   if (!filter) return todos.map((item, i) => <Item index={i} />);

//   return todos.map((item, i) => {
//     if (item.status === filter) return <Item index={i} />
//     return;
//   });
// }
