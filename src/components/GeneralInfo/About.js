import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-container">
        <div>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="locationInput"
            placeholder="Location"
            name="Location"
          />
        </div>
        <div>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="phoneInput"
            placeholder="Phone"
            name="phoneNum"
          />
        </div>
        <div>
          <input
            onChange={this.props.handleChange}
            type="email"
            id="emailInput"
            placeholder="Email"
            name="email"
          />
        </div>
      </div>
    );
  }
}

export default About;
