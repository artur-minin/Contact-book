import React, { Component } from 'react';

import { connect } from 'react-redux';

import Header from './ContactsHeader';
import Controls from './ContactsControls';
import Contact from './Contact';

class Contacts extends Component {

  render() {
    const {contacts} = this.props;
    return (
      <div className='contacts'>
        <Header />
        <Controls />
        {
          contacts.map(contact => {
            return (
               <Contact key={contact.name} avatar={contact.avatar}
                                          name={contact.name}
                                          email={contact.email}
                                          phone={contact.phone}
                                          city={contact.address.city}
                                          website={contact.website}
                                          isFavorite={contact.favorite}
                                          id={contact.id} /> 
            )
          })
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