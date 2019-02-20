import React from 'react';
import { connect } from 'react-redux';

import removeItem from '../actions/todos/removeItem';
import checkItem from '../actions/todos/checkItem';

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (index) => dispatch(removeItem(index)),
    checkItem: (index) => dispatch(checkItem(index))
  };
};

const ListItem = ({ content, status, index, removeItem, checkItem }) => {
  return (
    <li className={status}>
      {content}
      <div>
        <button onClick={() => checkItem(index)}>Done</button>
        <button onClick={() => removeItem(index)}>Remove</button>
      </div>
    </li>
  )
}

export default connect(null, mapDispatchToProps)(ListItem);
