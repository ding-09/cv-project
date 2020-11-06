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

  deleteHist = (id) => {
    this.setState({
      workHistory: [
        ...this.state.workHistory.filter((history) => history.id !== id),
      ],
    });
  };

  render() {
    return (
      <div className="section-container">
        <DisplayWorkHist works={this.state.workHistory} deleteHist={this.deleteHist}/>
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
