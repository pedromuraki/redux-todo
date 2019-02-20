import React from 'react';
import uuidv1 from 'uuid/v1';

import ListItem from '../components/ListItem';

const renderList = (todos, filter) => {
  if (!todos) return;

  if (!filter) return todos.map((item, i) => <ListItem key={uuidv1()} content={item.content} status={item.status} index={i} />);

  return todos.map((item, i) => {
    if (item.status === filter) return <ListItem key={uuidv1()} content={item.content} status={item.status} index={i} />
    return;
  });
}

export default renderList;
