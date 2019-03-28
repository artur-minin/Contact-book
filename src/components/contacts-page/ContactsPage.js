import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import sortByName from '../../utils/sort-by-name';

import Header from './ContactsHeader';
import Controls from './ContactsControls';
import Group from './ContactsGroup';
import Contact from './Contact';


class Contacts extends Component {

  state = {
    sortType: 'alphabetically',
    onlyFavorites: false,
    searchedValue: ''
  }

  toggleFavorites = () => {
    this.setState(prevState => {
      return {
        onlyFavorites: !prevState.onlyFavorites
      }
    })
  }

  changeSortType = (type) => {
    this.setState({
      sortType: type
    })
  }

  handleSearch = (value) => {
    this.setState({
      searchedValue: value
    })
  }

  render() {
    const { contacts } = this.props;
    const { sortType, onlyFavorites, searchedValue } = this.state;

    // Sort the list by the given criterion
    let filtredContacts = contacts;

    if (sortType) {
      filtredContacts =
        sortType === 'alphabetically'
        ? contacts.sort((current, next) => sortByName(current, next, 'alphabet'))
        : contacts.sort((current, next) => sortByName(current, next, 'reverse'));
    }

    
    // Show only favorite contacts
    if (onlyFavorites) {
      filtredContacts = filtredContacts.filter(contact => contact.favorite);
    }


    // Search
    if (searchedValue) {
      filtredContacts = filtredContacts
        .filter(contact =>
          contact.name.toLowerCase().includes(searchedValue.toLowerCase()),
        )
    }


    // Group by first letter
    let contactsObject = {};

    filtredContacts.forEach(contact => {
      const letter = contact.name.charAt(0).toUpperCase();
      if (contactsObject.hasOwnProperty(letter)) {
        contactsObject[letter] = [...contactsObject[letter], contact];
      }
      else {
        contactsObject[letter] = [contact];
      }
    })


    return (
      <div className='contacts'>
        <Header />
          <Controls sortType={sortType}
                    onlyFavorites={onlyFavorites}
                    toggleFavorites={this.toggleFavorites}
                    changeSortType={this.changeSortType}
                    handleSearch={this.handleSearch} />
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
    )
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  sortType: PropTypes.string,
  onlyFavorites: PropTypes.bool,
  searchedValue: PropTypes.string
}

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  };
};

export default connect(mapStateToProps)(Contacts);