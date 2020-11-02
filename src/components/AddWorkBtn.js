import React, { Component } from 'react';

class AddWorkBtn extends Component {

  render() {
    return (
      <button className='add-work-btn' onClick={this.props.displayModal}>
        <span>+</span> Add Work Experience
      </button>
    );
  }
}

export default AddWorkBtn;
