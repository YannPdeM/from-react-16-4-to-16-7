import React, { Component } from 'react';
import { unstable_trace as trace } from 'scheduler/tracing';

class Trace extends Component {
  constructor(props) {
    super(props);
    this.onClick.bind(this);
  }

  onClick () {
    trace('Login button click', performance.now(), () => {
      this.setState({ isLoggingIn: true });
    });
  };

  render () {
    return (
      <button onClick={this.onClick}>Click!</button>
    );
  }
}

export { Trace };