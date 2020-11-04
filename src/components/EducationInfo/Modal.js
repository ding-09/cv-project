import React, { Component } from 'react';
import uniqid from 'uniqid';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      dateAttended: '',
      studyField: '',
      location: '',
      degree: 'None',
      id: uniqid(),
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newEducHist = {
      school: this.state.school,
      dateAttended: this.state.dateAttended,
      studyField: this.state.studyField,
      location: this.state.location,
      degree: this.state.degree,
      id: uniqid(),
    };
    this.props.addEducHist(newEducHist);
    this.setState({
      school: '',
      dateAttended: '',
      studyField: '',
      location: '',
      degree: '',
      id: '',
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
            <label htmlFor="school">School</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="school"
              id="schoolInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateAttended">
              Date Attended <span>(MM/YYYY - MM/YYYY)</span>
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="dateAttended"
              id="schoolDateInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="degree">Degree</label>
            <div className="select-container">
              <select name="degree" id="degree" onChange={this.handleChange}>
                <option>None</option>
                <option>High school or equivalent</option>
                <option>Associate</option>
                <option>Bachelor's</option>
                <option>Master's</option>
                <option>Doctorate</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="studyField">Field of study</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="location"
              id="schoolLocationInput"
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
              id="schoolLocationInput"
            />
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
