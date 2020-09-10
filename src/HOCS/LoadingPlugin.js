import React from 'react';
import LoadingComponent from '..Loading';

const LoadingPlugin = (WrappedComponent) => class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.showLoading = this.showLoading.bind(this);
        this.state = {
            isLoading: false
        };
    }
    showLoading() {
        this.setState({ isLoading: !this.state.isLoading });
    }

    render() {
        const props = Object.assign({}, this.props, this.state, { showLoading: this.showLoading });
        return [
            <WrappedComponent {...props} />,
            this.state.isLoading && <LoadingComponent /> 
        ];
    }
};

export default LoadingPlugin;