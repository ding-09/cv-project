import React, { Component } from 'react';
import uniqid from 'uniqid';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle: '',
      employer: '',
      dateWorked: '',
      location: '',
      description: '',
      id: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newWorkHist = {
      jobTitle: this.state.jobTitle,
      employer: this.state.employer,
      dateWorked: this.state.dateWorked,
      location: this.state.location,
      description: this.state.description,
      id: uniqid(),
    };
    this.props.addWorkHist(newWorkHist);
    this.setState({
      jobTitle: '',
      employer: '',
      dateWorked: '',
      location: '',
      description: '',
    });
  };

  render() {
    if (!this.props.display) {
      return null;
    }

    return (
      <div className="modal-container">
        <form className="modal-content" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="jobTitle"
              id="jobInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employer">Company</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="employer"
              id="employerInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateWorked">
              Date Worked <span>(MM/YYYY - MM/YYYY)</span>
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="dateWorked"
              id="dateInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">
              Location <span>(e.g. Los Angeles, CA)</span>
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="location"
              id="workLocationInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={this.handleChange}
              name="description"
              id="jobDesc"
              placeholder="Tasks will re-format into bulletpoints on save"
            ></textarea>
          </div>
          <div className="modal-action-btns">
            <input type="submit" value="Save" className="save-work-btn" />
            <button className="close-modal-btn" onClick={this.props.closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
