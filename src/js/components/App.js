import React from 'react';

import List from './List';

const App = () => (
  <div>
    <div>
      <h3>Add new item:</h3>
      <input type="text" /> <button>Add</button>
    </div>

    <List />

    <div>
      <h3>Filter by:</h3>
      <button>All</button>
      <button>Done</button>
      <button>To do</button>
    </div>
  </div >
)

export default App;
