import React from 'react';
import { connect } from 'react-redux';

import renderList from '../helpers/renderList';

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  };
};

const List = ({ todos, filter }) => {
  return (
    <ul>
      <h3>To do list:</h3>
      {renderList(todos, filter)}
    </ul>
  )
}

export default connect(mapStateToProps)(List);
