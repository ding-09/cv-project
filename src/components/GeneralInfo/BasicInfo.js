import React, { Component } from 'react';
import Name from './Name';
import About from './About';

class BasicInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      location: '',
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
    return (
      <div className="basic-info-container">
        <Name handleChange={this.handleChange} />
        <About handleChange={this.handleChange} />
      </div>
    );
  }
}

export default BasicInfo;
