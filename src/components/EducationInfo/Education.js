import React, { Component } from 'react';
import AddEducationBtn from './AddEducationBtn';
import Modal from './Modal';
import DisplayEducHist from './DisplayEducHist'

class Education extends Component {
  constructor() {
    super();

    this.state = {
      modalDisplay: false,
      education: [],
    };
  }

  displayModal = () => {
    this.setState({
      modalDisplay: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalDisplay: false,
    });
  };

  addEducHist = (educHist) => {
    const newEducHist = educHist;
    this.setState({
      education: [...this.state.education, newEducHist],
      modalDisplay: false,
    });
  };

  render() {
    return (
      <div className="section-container">
        <DisplayEducHist educations={this.state.education} />
        <Modal
          display={this.state.modalDisplay}
          closeModal={this.closeModal}
          addEducHist={this.addEducHist}
        />
        <AddEducationBtn displayModal={this.displayModal} />
      </div>
    );
  }
}

export default Education;
