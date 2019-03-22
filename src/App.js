import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from '../src/components/shared/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <ErrorBoundary>
          <Router>
            <Main />
          </Router>
        </ErrorBoundary>
      </Provider>
    );
  };
};

export default App;