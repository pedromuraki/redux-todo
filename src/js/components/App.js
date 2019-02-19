import React from 'react';

const App = () => (
  <div>
    <div>
      <h3>Add new item:</h3>
      <input type="text" /> <button>Add</button>
    </div>

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

    <div>
      <h3>Filter by:</h3>
      <button>All</button>
      <button>Done</button>
      <button>To do</button>
    </div>
  </div >
)

export default App;
