import React, { Component } from 'react';

class ErrorBoundary extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  render() {
    const errorIndicator = <div className='error-indicator'>Something went wrong :(</div>;
    
    if (this.state.hasError) {
      return errorIndicator;
    };
    return this.props.children;
  };
};

export default ErrorBoundary;