import React from "react";
import Spinner from './Spinner'

function withLoadingSpinner(WrappedComponent) {
  return class extends React.Component {
    render() {
      if (!this.props.data) {
        return <Spinner />;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  };
}

// Presentational component
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

const HelloWorldWithLoadingSpinner = withLoadingSpinner(HelloWorld);

// Conatiner component
class HelloWorldContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    // In the real world, this is probably an Ajax call
    setTimeout(() => this.loadingComplete(), 2000);
  }
  loadingComplete() {
    this.setState({ data: "hello" });
  }
  render() {
    return <HelloWorldWithLoadingSpinner data={this.state.data} />;
  }
}

export default HelloWorldContainer;