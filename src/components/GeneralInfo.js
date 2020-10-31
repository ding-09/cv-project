import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      phoneNum: '',
      email: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, phoneNum, email } = this.state;
    return (
      <div className="general-info">
        <input
          onChange={this.handleChange}
          type="text"
          id="nameInput"
          placeholder="Name"
          name="name"
          value={name}
        />
        <input
          onChange={this.handleChange}
          type="number"
          id="phoneInput"
          placeholder="Phone"
          name="phoneNum"
          value={phoneNum}
        />
        <input
          onChange={this.handleChange}
          type="email"
          id="emailInput"
          placeholder="Email"
          name="email"
          value={email}
        />
      </div>
    );
  }
}

export default GeneralInfo;
