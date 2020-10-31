import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {onBtnClick} = this.props;
    return (
      <div className="add-task" onClick={onBtnClick}>
        <span className="plus-sign">+ </span>
        <span className="job-desc">Job Description</span>
      </div>
    );
  }
}

export default AddTask;
