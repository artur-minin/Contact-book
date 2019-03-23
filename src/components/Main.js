import React, {Component} from 'react';

import { connect } from 'react-redux';
import { fetchContacts } from '../actions/index';

import { Route, Switch } from 'react-router-dom';

import ContactsPage from './contacts-page/ContactsPage';
import NotFoundPage from './shared/NotFoundPage';

import MoreAboutContact from './contacts-page/MoreAboutContact';

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
    const { contacts } = this.props;
    return (
      <Switch>
        <Route path='/' exact component={ContactsPage} />
        {
          contacts.map(contact => {
            return (
              <Route key={contact.name} path={`/${contact.id}`}
                render={() => {
                  return <MoreAboutContact id={contact.id} />
                }}
              />
            )
          })
        }
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