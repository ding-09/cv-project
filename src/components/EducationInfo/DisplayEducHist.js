import React, { Component } from 'react';
import EducationHist from './EducationHist';

class DisplayEducHist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.educations.map((education) => (
            <EducationHist key={education.id} education={education} deleteHist={this.props.deleteHist}/>
        ));
    }
}

export default DisplayEducHist;
