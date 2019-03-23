import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchContacts } from '../actions/index';

import { Route, Switch } from 'react-router-dom';

import Contacts from './contacts-page/Contacts';
import NotFoundPage from './shared/NotFoundPage';

class Main extends Component {

  componentDidMount() {
    const { fetchContacts } = this.props;
    const isEmpty = localStorage.getItem('contacts');

    if (!isEmpty) {
      fetchContacts();
    };
  };

  render() {
    const { contacts } = this.props;
    console.log('contactsSSSSS', contacts);
    return (
      <Switch>
        <Route path='/' exact component={Contacts} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  };
};

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