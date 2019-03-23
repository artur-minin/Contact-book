import React, {Component} from 'react';

import { connect } from 'react-redux';
import { fetchContacts } from '../actions/index';

import { Route, Switch } from 'react-router-dom';

import Contacts from './contacts-page/Contacts';
import NotFoundPage from './shared/NotFoundPage';

class Main extends Component {

  componentDidMount() {
    const { fetchContacts } = this.props;
    const isEmpty = localStorage.getItem('contacts');
    
    // If the localStorage is empty, then we get data from the API
    if (!isEmpty) {
      fetchContacts();
    };
  };

  render() {
    return (
      <Switch>
        <Route path='/' exact component={Contacts} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  };
};

// Contact list from redux
const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch(fetchContacts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);