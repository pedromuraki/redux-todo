import React, { Component } from 'react';
import { connect } from 'react-redux';

// const mapDispatchToProps = dispatch => {
//   return {
//     addCounter: () => dispatch(addCounter())
//   };
// };

class Form extends Component {
  render() {
    return (
      <form>
        <h3>Add new item:</h3>
        <input type="text" /> <button type="submit">Add</button>
      </form>
    )
  }
}

// export default connect(null, mapDispatchToProps)(Form);
export default Form;
