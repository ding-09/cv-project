import React, { Component } from 'react';
import DeleteBtn from './DeleteBtn';

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
      id,
    } = this.props.education;

    return (
      <div className="rendered-info">
        <h4 className="main-title-dist">{school}</h4>
        <p className="sub-info">{degree}</p>
        <p className="sub-info">{studyField}</p>
        <p className="sub-info">{location}</p>
        <p className="date-dist">{dateAttended}</p>
        <DeleteBtn id={id} deleteHist={this.props.deleteHist} />
      </div>
    );
  }
}

export default EducationHist;
