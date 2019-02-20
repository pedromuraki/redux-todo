import React from 'react';

import renderList from '../renderList';

import ListItem from '../../components/ListItem';

import { expect } from 'chai';

it('renderList should be a function', () => {
  expect(renderList).to.be.a('function');
});

it('should return', () => {
  const todos = [
    { content: 'Item 1', status: 'to-do' },
    { content: 'Item 2', status: 'to-do' },
    { content: 'Item 3', status: 'to-do' }
  ]
  const filter = false;
  const result = [
    <ListItem content="Item 1" index="0" />,
    <ListItem content="Item 2" index="1" />,
    <ListItem content="Item 3" index="2" />
  ]
  expect(renderList(todos, filter)).to.be.eql(result);
});
