import React, { Component } from 'react';
import uniqid from 'uniqid';

class TaskDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className="desc-list">
        <ul>
          {tasks.map((task) => {
            return <li key={uniqid()}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TaskDisplay;
