import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { changeContact } from '../../actions/index';

class EditContact extends Component {

  contact = this.props.contacts.find(contact => contact.id === this.props.id);

  state = {
    name: this.contact.name,
    city: this.contact.address.city,
    street: this.contact.address.streetA,
    apartment: this.contact.address.streetD,
    email: this.contact.email,
    phone: this.contact.phone,
    website: this.contact.website,
    company: this.contact.company.name,
    favorite: this.contact.favorite,
    id: this.contact.id
  }

  changeParameter = (parameter, value) => {
    this.setState(() => {
      return {
        [parameter]: value
      }
    })
  }


  render() {
    const { contacts, changeContact, deleteContact } = this.props;

    const { avatar, name, address, email, phone, website, company } = this.contact;
    const changedProps = { ...this.state };

    return (
      <div className='edit-contact-wrapper'>
        <div className='edit-contact'>
          
          <Link to='/' className='edit-contact__close' />

          <section className='edit-contact__main-section'>
            <img className='edit-contact__main-section-photo' src={avatar} alt='avatar' />
            <input className='input-big' type='text' defaultValue={name}
                   onChange={(event) => this.changeParameter('name', event.target.value)} />
            <div className={  this.state.favorite
                              ? 'edit-contact__favorite'
                              : 'edit-contact__favorite'.concat(' not-favorite')}
                 onClick={() => this.changeParameter('favorite', !this.state.favorite)} />
            <Link to={`/${this.contact.id}/`} className='edit-contact__save'
                  onClick={() => changeContact(contacts, this.contact, changedProps)}>
              Save
            </Link>
            <Link to={`/${this.contact.id}/`} className='edit-contact__cancel'
                  onClick={() => deleteContact(contacts, this.contact.id)}>
              Cancel
            </Link>
          </section>

          <section className='edit-contact__address-section'>
            <div className='edit-contact__address-section-title'>address</div>
            <div className='edit-contact__address-section-city'>
              <span className='description'>city: </span>
              <input className='input-small' type='text' defaultValue={address.city}
                     onChange={(event) => this.changeParameter('city', event.target.value)} />
            </div>
            <div className='edit-contact__address-section-street'>
              <span className='description'>street: </span>
              <input className='input-small' type='text' defaultValue={address.streetA}
                     onChange={(event) => this.changeParameter('street', event.target.value)} />
            </div>
            <div className='edit-contact__address-section-apartment'>
              <span className='description'>apartment: </span>
              <input className='input-small' type='text' defaultValue={address.streetD}
                     onChange={(event) => this.changeParameter('apartment', event.target.value)} />
            </div>
          </section>

          <section className='edit-contact__contacts-section'>
            <div className='edit-contact__contacts-section-title'>contacts</div>
            <div className='edit-contact__contacts-section-email'>
              <span className='description'>email: </span>
              <input className='input-small' type='text' defaultValue={email}
                      onChange={(event) => this.changeParameter('email', event.target.value)} />
            </div>
            <div className='edit-contact__contacts-section-phone'>
              <span className='description'>phone: </span>
              <input className='input-small' type='text' defaultValue={phone}
                     onChange={(event) => this.changeParameter('phone', event.target.value)} />
            </div>
            <div className='edit-contact__contacts-section-website'>
              <span className='description'>website: </span>
              <input className='input-small' type='text' defaultValue={website}
                     onChange={(event) => this.changeParameter('website', event.target.value)} />
            </div>
            <div className='edit-contact__contacts-section-company'>
              <span className='description'>company: </span>
              <input className='input-small' type='text' defaultValue={company.name}
                     onChange={(event) => this.changeParameter('company', event.target.value)} />
            </div>
          </section>
          
        </div>
      </div>
    );
  };
};

EditContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  changeContact: PropTypes.func.isRequired
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  }
};

const mapDispatchToProps = { changeContact };

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);