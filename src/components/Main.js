import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getContacts } from '../actions/index';

import { Route, Switch } from 'react-router-dom';

import ContactsPage from './contacts-page/ContactsPage';
import NotFoundPage from './shared/NotFoundPage';
import MoreAboutContactPage from './more-about-contact-page/MoreAboutContactPage';
import EditContact from './edit-contact/EditContact';
import AddContactPage from './add-contact-page/AddContactPage';

class Main extends Component {

  componentDidMount() {
    this.props.getContacts();
  };

  render() {
    const { contacts, theme } = this.props;

    return (
      <div className={ theme === 'light'
                                  ? 'App-light'
                                  : 'App-dark'} >
        <Switch>
          <Route path='/' exact component={ContactsPage} />
          {
            contacts.map(contact => (
              <Route key={contact.name} exact path={`/${contact.id}/`}
                    render={() => ( <MoreAboutContactPage id={contact.id} /> )}
              /> )
            )
          }
          {
            contacts.map(contact => (
              <Route key={contact.name} exact path={`/${contact.id}/edit`}
                    render={() => ( <EditContact id={contact.id} /> )}
              /> )
            )
          }
          <Route path='/add-contact' component={AddContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  };
};

Main.propTypes = {
  getContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
};


const mapStateToProps = ({ contacts, theme }) => {
  return {
    contacts,
    theme
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getContacts: () => dispatch(getContacts)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);