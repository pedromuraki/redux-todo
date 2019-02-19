import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

const mapStateToProps = state => {
  return {
    counters: state.counters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCounter: () => dispatch(addCounter())
  };
};

const Counters = ({ counters, addCounter }) => {
  return (
    <Fragment>
      {counters.map((counter, i) => (<Counter key={uuidv1()} index={i} />))}
      <button onClick={addCounter}>Add counter</button>
    </Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
