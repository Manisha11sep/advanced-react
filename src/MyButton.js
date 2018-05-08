import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
  render() {
    // const { value: { a, b, c }} = this.props;
    // const a = this.props.value.a;
    return (
      <button>{this.props.text}</button>
    );
  }
}

MyButton.propTypes = {
  text: PropTypes.arrayOf(PropTypes.number).isRequired,
  value: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.string.isRequired,
    c: PropTypes.arrayOf(PropTypes.number).isRequired,
  })
};

MyButton.defaultProps={
    text: "Hello from future"
}
