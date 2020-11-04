import React, { Component } from 'react';

class AddEducationBtn extends Component {
  render() {
    return (
      <button className="add-info-btn" onClick={this.props.displayModal}>
        <span>+</span> Add Education
      </button>
    );
  }
}

export default AddEducationBtn;
