import './App.css';
import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import WorkHist from './components/WorkHist';


class App extends Component {
  render() {
    return (
      <form id="form">
        <GeneralInfo />
        <div className="work-history">
          <h2>Work History</h2>
        </div>
        <WorkHist />
      </form>
    );
  }
}

export default App;
