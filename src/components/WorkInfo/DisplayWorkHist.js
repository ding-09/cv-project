import React, { Component } from 'react';
import WorkExp from './WorkExp';

class DisplayWorkHist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.works.map((work) => (
        <WorkExp key={work.id} work={work}/>
    ));
  }
}

export default DisplayWorkHist;
