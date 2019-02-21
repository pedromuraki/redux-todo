import React, { Component } from 'react';
import { connect } from 'react-redux';

import addItem from '../actions/todos/addItem';

const mapDispatchToProps = {
  addItem
}

class Form extends Component {
  constructor() {
    super();

    // this.state = {
    //   inputValue: ''
    // };

    // this.handleChange = (e) => {
    //   this.setState({ inputValue: e.target.value });
    // }

    this.handleSubmit = (e) => {
      e.preventDefault();
      // this.props.addItem(this.state.inputValue);
      this.props.addItem(e.target.item.value);
      e.target.item.value = '';
      // this.setState({ inputValue: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h3>Add new item:</h3>
        <div>
          <input
            type="text"
            name="item"
            // onChange={this.handleChange}
            // value={this.state.inputValue}
            required
          />
          <button type="submit">Add</button>
        </div>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(Form);
