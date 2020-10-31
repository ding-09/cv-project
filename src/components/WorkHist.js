import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskDisplay from './TaskDisplay';

class WorkHist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employer: '',
      jobTitle: '',
      location: '',
      dateWorked: '',
      task: '',
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  newTask = () => {
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: '',
    });
  };

  render() {
    const {
      employer,
      jobTitle,
      location,
      dateWorked,
      task,
      tasks,
    } = this.state;
    return (
      <div>
        <div className="employer-container">
          <input
            onChange={this.handleChange}
            type="text"
            id="employerInput"
            placeholder="Employer"
            name="employer"
            value={employer}
          />
        </div>
        <div className="job-info">
          <input
            onChange={this.handleChange}
            type="text"
            id="titleInput"
            placeholder="Job Title"
            name="jobTitle"
            value={jobTitle}
          />
          <span className="divider">/</span>
          <input
            onChange={this.handleChange}
            type="text"
            id="locationInput"
            placeholder="Location (Los Angeles, CA)"
            name="location"
            value={location}
          />
          <span className="divider">/</span>
          <input
            onChange={this.handleChange}
            type="text"
            id="dateInput"
            placeholder="Date Worked (MM/YYYY - MM/YYYY)"
            name="dateWorked"
            value={dateWorked}
          />
        </div>
        <TaskDisplay tasks={tasks} />
        <input
          onChange={this.handleChange}
          type="text"
          id="taskInput"
          name="task"
          value={task}
        />
        <AddTask onBtnClick={this.newTask} />
      </div>
    );
  }
}

export default WorkHist;
