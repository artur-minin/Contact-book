import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import Header from './ContactsHeader';
import Controls from './ContactsControls';
import Group from './ContactsGroup';
import Contact from './Contact';


class Contacts extends Component {

  render() {
    const { contacts } = this.props;
  
    // Group by first letter
    let contactsObject = {};

    contacts.forEach(contact => {
      const letter = contact.name.charAt(0).toUpperCase();
      if (contactsObject.hasOwnProperty(letter)) {
        contactsObject[letter] = [...contactsObject[letter], contact];
      }
      else {
        contactsObject[letter] = [contact];
      };
    });

    return (
      <div className='contacts'>
        <Header />
        <Controls />
        {
          Object.keys(contactsObject).map(letter => (
            <Fragment key={letter}>
              <Group groupBy={letter} />
              {
                contactsObject[letter].map(contact => <Contact key={contact.name} {...contact} />)
              }
            </Fragment>
          ))
        }
      </div>
    );
  };
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  };
};

export default connect(mapStateToProps)(Contacts);