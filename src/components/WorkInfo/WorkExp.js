import React, { Component } from 'react';
import FormatDesc from './FormatDesc';

class WorkExp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      jobTitle,
      employer,
      location,
      dateWorked,
      description,
    } = this.props.work;

    return (
      <div className="work-hist-display">
        <h4 className="job-title-dist">{jobTitle}</h4>
        <p className="date-worked-dist">{dateWorked}</p>
        <p className="employer-dist">{employer}</p>
        <p className="location-dist">{location}</p>
        <div className="formatted-list"><FormatDesc desc={description} /></div>
      </div>
    );
  }
}

export default WorkExp;
