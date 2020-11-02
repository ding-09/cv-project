import React, { Component } from 'react';
import AddWorkBtn from './AddWorkBtn';
import Modal from './Modal';

class WorkHist extends Component {
  constructor() {
    super();

    this.state = {
      modalDisplay: false,
      workHistory: [],
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

  render() {
    return (
      <div className="work-exp-container">
        <Modal display={this.state.modalDisplay} closeModal={this.closeModal} />
        <AddWorkBtn displayModal={this.displayModal} />
      </div>
    );
  }
}

export default WorkHist;
