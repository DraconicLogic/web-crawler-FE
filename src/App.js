import React, { Component } from 'react';
import Input from './components/Input';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    response: ''
  }
  render() {
    return (
      <div className="App">
        <Route path="/input" component={Input} />
        <Route path="/report" render={() => { <Report response={this.state.response} /> }} />
      </div>
    );
  }
}

export default App;
