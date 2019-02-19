import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addCounter: () => dispatch(addCounter())
//   };
// };

const List = ({ todos }) => {
  return (
    <ul>
      <h3>To do list:</h3>
      <li style={{ textDecoration: 'line-through' }}>
        Item
      </li>
      <li>
        Item <button>Done</button> <button>Remove</button>
      </li>
      <li>
        Item <button>Done</button> <button>Remove</button>
      </li>
      <li>
        Item <button>Done</button> <button>Remove</button>
      </li>
    </ul>
  )
}

export default connect(mapStateToProps)(List);
