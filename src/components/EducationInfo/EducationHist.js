import React, { Component } from 'react';

class EducationHist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      school,
      dateAttended,
      location,
      degree,
      studyField,
    } = this.props.education;

    return (
      <div className="rendered-info">
        <h4 className="main-title-dist">{school}</h4>
        <p className="sub-info">{degree}</p>
        <p className="sub-info">{studyField}</p>
        <p className="sub-info">{location}</p>
        <p className="date-dist">{dateAttended}</p>
      </div>
    );
  }
}

export default EducationHist;
