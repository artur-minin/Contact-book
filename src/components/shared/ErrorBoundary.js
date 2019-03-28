import React, { Component } from 'react';

import { connect } from 'react-redux';
import { errorOccured } from '../../actions';

class ErrorBoundary extends Component {

  componentDidCatch(error) {
    this.props.errorOccured(error);
  };

  render() {
    const hasError = this.props.error;

    const errorIndicator = <div className='error-boundary'>
                             <div className='error-boundary__text'>Something went wrong :(</div>
                           </div>;
    
    if (hasError) {
      return errorIndicator;
    };

    return this.props.children;
  };
};

const mapStateToProps = ({ error }) => {
  return {
    error
  }
};

const mapDispatchToProps = ({ errorOccured });

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);