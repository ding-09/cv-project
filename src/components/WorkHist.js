import React, { Component } from 'react';
import AddWorkBtn from './AddWorkBtn';
import Modal from './Modal';
import DisplayWorkHist from './DisplayWorkHist';

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

  addWorkHist = (workHist) => {
    const newWorkHist = workHist;
    this.setState({
      workHistory: [...this.state.workHistory, newWorkHist],
      modalDisplay: false,
    });
  };

  render() {
    return (
      <div className="work-exp-container">
        <DisplayWorkHist works={this.state.workHistory} />
        <Modal
          display={this.state.modalDisplay}
          closeModal={this.closeModal}
          addWorkHist={this.addWorkHist}
        />
        <AddWorkBtn displayModal={this.displayModal} />
  
      </div>
    );
  }
}

export default WorkHist;
