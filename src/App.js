import React, { Component } from 'react';
import Input from './components/Input';
import './App.css';

class App extends Component {
  state = {
    response: ''
  }
  render() {
    return (
      <div className="App">
        <Input func={this.handleResponse} />
      </div>
    );
  }

  handleResponse = (data) => {
    this.setState({
      response: data
    });
  }
}

export default App;
