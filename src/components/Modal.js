import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.display) {
      return null;
    }
    return (
      <div className="modal-container">
        <form className="modal-content">
          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" name="jobTitle" id="jobInput" />
          </div>
          <div>
            <label htmlFor="employer">Company</label>
            <input type="text" name="employer" id="employerInput" />
          </div>
          <div>
            <label htmlFor="dateWorked">
              Date Worked <span>(MM/YYYY - MM/YYYY)</span>
            </label>
            <input type="text" name="dateWorked" id="dateInput" />
          </div>
          <div>
            <label htmlFor="location">
              Location <span>(e.g. Los Angeles, CA)</span>
            </label>
            <input type="text" name="location" id="workLocationInput" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="jobDesc"
              placeholder="Tasks will re-format into bulletpoints on save"
            ></textarea>
          </div>
          <div className="modal-action-btns">
            <input type="submit" value="Save" className="save-work-btn" />
            <button className="close-modal-btn" onClick={this.props.closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
