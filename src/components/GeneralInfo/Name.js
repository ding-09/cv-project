import React, { Component } from 'react';

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="name-container">
        <input
          type="text"
          id="nameInput"
          placeholder="Name"
          name="name"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Name;
