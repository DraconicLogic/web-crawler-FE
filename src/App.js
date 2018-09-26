import React, { Component } from 'react';
import Input from './components/Input';
import { Route } from 'react-router-dom';
import './App.css';
import Report from './components/Report';

class App extends Component {
  state = {
    report: {
      rootUrl: 'www.bbc.co.uk',
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
    const workingLinks = []
    const brokenLinks = []
    response.forEach(link => {
      link.status === 'successful' ? workingLinks.push(link.url) : brokenLinks.push(link.url)
    })
    this.setState({
      report: {
        brokenLinks, workingLinks
      }
    }, () => {
      console.log(this.state)
    })
  }
}

export default App;
