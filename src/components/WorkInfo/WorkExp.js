import React, { Component } from 'react';
import FormatDesc from './FormatDesc';
import DeleteBtn from './DeleteBtn';

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
      id,
    } = this.props.work;

    return (
      <div className="rendered-info">
        <h4 className="main-title-dist">{jobTitle}</h4>
        <p className="date-dist">{dateWorked}</p>
        <p className="sub-info">{employer}</p>
        <p className="sub-info">{location}</p>
        <div className="formatted-list">
          <FormatDesc desc={description} />
        </div>
        <DeleteBtn id={id} deleteHist={this.props.deleteHist} />
      </div>
    );
  }
}

export default WorkExp;
