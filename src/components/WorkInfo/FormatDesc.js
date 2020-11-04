import React, { Component } from 'react';

class FormatDesc extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { desc } = this.props;
    return (
      <ul className="work-desc-list">
        {desc.split('\n').map((bulletPoint) => {
          return <li>{bulletPoint}</li>;
        })}
      </ul>
    );
  }
}

export default FormatDesc;
