import React, { Component } from 'react';
import setIntervalHOC from './index.js';
import PropTypes from 'prop-types';
class App extends Component {
  static propTypes = {
    timer: PropTypes.number,
  }
  static defaultProps = {
    timer: 500,
  }
  state = {
    amount: 0,
  }
  componentDidMount() {
    this.props.setInterval(
      this.tick.bind(this),
      this.props.timer
    );
  }
  tick() {
    this.setState({
      amount: this.state.amount + 1,
    });
  }
  render() {
    return (<div>{this.state.amount}</div>);
  }
}
export default setIntervalHOC(App);