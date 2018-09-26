import React, { Component } from 'react';
import * as api from '../api';

class Input extends Component {
    state = {
        inputText: '',
        validAddress: false
    }
    render() {
        return (
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
            api.getReport(e)
                .then(data => {
                    this.props.func(data)
                })
        }
    }
}


export default Input;