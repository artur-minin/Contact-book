import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class MoreAboutContact extends Component {

  render() {

    const { id, contacts } = this.props;
    const { avatar, name, address, email, phone, website, company, favorite } = contacts.find(contact => id === contact.id);

    return (
      <div className='moreAboutContact-wrapper'>
        <div className='moreAboutContact'>
          <Link to='/' className='moreAboutContact__close'/>
          <section className='moreAboutContact__main-section'>
            <img className='moreAboutContact__main-section-photo' src={avatar} alt='avatar' />
            <div className='moreAboutContact__main-section-name'>{name}</div>
            <div className={favorite ? 'moreAboutContact__favorite' : 'moreAboutContact__favorite'.concat(' not-favorite')} />
          </section>
          <section className='moreAboutContact__address-section'>
            <div className='moreAboutContact__address-section-title'>address</div>
            <div className='moreAboutContact__address-section-city'>
              <span className='description'>location: </span>
              {address.country}, {address.state}, {address.city}
            </div>
            <div className='moreAboutContact__address-section-street'>
              <span className='description'>street: </span>
              {address.streetA}, {address.streetD}
            </div>
          </section>
          <section className='moreAboutContact__contacts-section'>
            <div className='moreAboutContact__contacts-section-title'>contacts</div>
            <div className='moreAboutContact__contacts-section-email'>
              <span className='description'>email: </span>
              {email}
            </div>
            <div className='moreAboutContact__contacts-section-phone'>
              <span className='description'>phone: </span>
              {phone}
            </div>
            <div className='moreAboutContact__contacts-section-website'>
              <span className='description'>website: </span>
              <a className='description' href={`http://${website}`} target='_blank' rel='noopener noreferrer'>{website}</a>
            </div>
            <div className='moreAboutContact__contacts-section-company'>
              <span className='description'>company: </span>
              {company.name}
            </div>
          </section>
        </div>
      </div>
    ); 
  };
};

MoreAboutContact.propTypes = {
  id: PropTypes.number.isRequired,
  contacts: PropTypes.array.isRequired
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  };
};

export default connect(mapStateToProps)(MoreAboutContact);