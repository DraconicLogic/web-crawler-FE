import React, { Component } from 'react';
import Input from './components/Input';
import { Route } from 'react-router-dom';
import './App.css';
import Report from './components/Report';

class App extends Component {
  state = {
    report: {
      rootUrl: 'www.bbc.co.uk',
      totalLink: 3,
      totalBrokenLinks: 2,
      brokenLinks: ['www.123.com', 'www.456.com'],
      workingLinks: ['www.abc.com']
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={() => <Input handleReport={this.handleReport} />} />
        <Route path="/report" render={() => <Report report={this.state.report} />} />
      </div>
    );
  }

  handleReport = (response) => {
    console.log("report handled!")
    this.setState({
      response
    })
  }
}

export default App;
