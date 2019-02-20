import React from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = state => {
//   return {
//     todos: state.todos,
//     filter: state.filter
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addCounter: () => dispatch(addCounter())
//   };
// };

const ListItem = ({ content, index }) => {
  return (
    <li>
      {content} <button>Done</button> <button>Remove</button>
    </li>
  )
}

// export default connect(mapStateToProps)(List);
export default ListItem;
