import React, { Component } from 'react';
import * as api from '../api';
import { Redirect } from 'react-router-dom';

class Input extends Component {
  state = {
    inputText: '',
    validAddress: false,
    submitted: false
  }
  render() {
    if (this.state.submitted) return <Redirect to={{ pathname: '/report' }} />
    else return (
      <div>
        <form onSubmit={(this.submitChange)}>
          <label>
            Enter a web address to check:
              <input type="text" className={this.state.validAddress ? 'true' : 'false'} onChange={this.handleChange} name="site" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    const regCheck = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    const bool = regCheck.test(e.target.value);
    this.setState({
      inputText: e.target.value,
      validAddress: bool
    });
  }

  submitChange = (e) => {
    e.preventDefault();
    if (this.state.validAddress) {
      api.getReport(this.state.inputText)
        .then(res => {
          this.props.handleReport(res);
        })
        .then(() => {
          this.setState({
            inputText: '',
            validAddress: false,
            submitted: true
          })
        })
    }
  }
}



export default Input;