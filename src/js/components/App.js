import React from 'react';

import Form from './Form';
import List from './List';

const App = () => (
  <div className="app-wrapper">
    <Form />
    <List />

    <div className="filters">
      <h3>Filter by:</h3>
      <button>All</button>
      <button>Done</button>
      <button>To do</button>
    </div>
  </div>
)

export default App;
