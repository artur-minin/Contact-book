import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { editContact } from '../../actions/index';

class EditContact extends Component {

  contact = this.props.contacts.find(contact => contact.id === this.props.id);

  state = {
    avatar: this.contact.avatar,
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
    const { contacts, editContact, deleteContact } = this.props;

    const { avatar, name, address: { city, streetA: street, streetD : apartment}, email, phone, website, company, id } = this.contact;
    const changedProps = { ...this.state };

    return (
      <div className='edit-contact-wrapper'>
        <div className='edit-contact'>
          
          <Link to='/' className='edit-contact__close' />

          <section className='edit-contact__main-section'>
            <div className={this.state.favorite
              ? 'edit-contact__favorite'
              : 'edit-contact__favorite'.concat(' not-favorite')}
              onClick={() => this.changeParameter('favorite', !this.state.favorite)} />
            <img className='edit-contact__main-section-photo' src={avatar} alt='avatar' />
            <div className='edit-contact__main-section-name'> 
              <span className='description'>name: </span>
              <input className='input-small' type='text' defaultValue={name}
                     onChange={(event) => this.changeParameter('name', event.target.value)} />
            </div>
            <div className='edit-contact__main-section-avatar'>
              <span className='description'>avatar: </span>
              <input className='input-small' defaultValue={avatar}
                     onChange={(event) => this.changeParameter('avatar', event.target.value)} />
            </div>

            <Link to={`/${this.contact.id}/`} className='edit-contact__save'
                  onClick={() => editContact(contacts, this.contact, changedProps)}>
              Save
            </Link>
            <Link to={`/${this.contact.id}/`} className='edit-contact__cancel'
                  onClick={() => deleteContact(contacts, id)}>
              Cancel
            </Link>
          </section>

          <section className='edit-contact__address-section'>
            <div className='edit-contact__address-section-title'>address</div>
            <div className='edit-contact__address-section-city'>
              <span className='description'>city: </span>
              <input className='input-small' type='text' defaultValue={city}
                     onChange={(event) => this.changeParameter('city', event.target.value)} />
            </div>
            <div className='edit-contact__address-section-street'>
              <span className='description'>street: </span>
              <input className='input-small' type='text' defaultValue={street}
                     onChange={(event) => this.changeParameter('street', event.target.value)} />
            </div>
            <div className='edit-contact__address-section-apartment'>
              <span className='description'>apartment: </span>
              <input className='input-small' type='text' defaultValue={apartment}
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
  editContact: PropTypes.func.isRequired
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  }
};

const mapDispatchToProps = { editContact };

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);