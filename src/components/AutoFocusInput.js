import React, { Component } from 'react';

// Reference: https://github.com/reduxjs/react-redux/pull/270#issuecomment-175217424

class MyComponent extends Component {
  render() {
    return (
      <div>
        <input ref={this.props.inputRef} />
      </div>
    );
  }
}

class MidComponent extends Component {
  render() {
    return (
      <MyComponent inputRef={this.props.inputRef} />
    )
  }
}

class ParentComponent extends Component {
  componentDidMount() {
    this.input.focus();
  }

  render() {
    return (
      <MidComponent inputRef={input => this.input = input} />
    )
  }
}

export default ParentComponent;