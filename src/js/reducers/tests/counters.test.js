import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import counters from '../counters';

it('counter should be a function', () => {
  expect(counters).to.be.a('function')
});

describe('ADD_COUNTER', () => {
  it('should add a counter', () => {
    const initialState = deepFreeze([]);
    const action = deepFreeze({ type: 'ADD_COUNTER' })
    const endState = [0];

    expect(counters(initialState, action)).to.be.eql(endState);
  });

  it('should add another counter', () => {
    const initialState = deepFreeze([0]);
    const action = deepFreeze({ type: 'ADD_COUNTER' })
    const endState = [0, 0];

    expect(counters(initialState, action)).to.be.eql(endState);
  });
});

describe('INCREMENT', () => {
  it('should increment 1 on respective counter', () => {
    const initialState = deepFreeze([0, 0]);
    const action = deepFreeze({ type: 'INCREMENT', index: 1 })
    const endState = [0, 1];
    expect(counters(initialState, action)).to.be.eql(endState)
  });
});

describe('DECREMENT', () => {
  it('should decrement 1 on respective counter', () => {
    const initialState = deepFreeze([0, 0]);
    const action = deepFreeze({ type: 'DECREMENT', index: 1 })
    const endState = [0, -1];
    expect(counters(initialState, action)).to.be.eql(endState)
  });
});

describe('UNKNOWN ACTION', () => {
  it('should return initial state if action is unknown', () => {
    const initialState = deepFreeze([0, 0]);
    const action = deepFreeze({ type: 'FOO', index: 1 })
    const endState = [0, 0];
    expect(counters(initialState, action)).to.be.eql(endState)
  });
});
