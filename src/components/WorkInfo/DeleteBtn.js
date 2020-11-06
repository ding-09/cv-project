import React, { Component } from 'react';

class DeleteBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props;
    return (
      <div className="delete-btn-container">
        <button
          className="delete-btn"
          onClick={this.props.deleteHist.bind(this, id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default DeleteBtn;
