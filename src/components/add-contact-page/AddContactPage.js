import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addContact } from '../../actions/index';


class AddContactPage extends Component {

  state = {
    avatar: '',
    name: '',
    city: '',
    street: '',
    apartment: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    favorite: false,
    id: this.props.contacts.length
  }

  changeParameter = (parameter, value) => {
    this.setState(() => {
      return {
        [parameter]: value
      }
    })
  }


  render() {
    const { contacts, addContact } = this.props;
  
    const newContact = { ...this.state };
    const { avatar, name, city, street, apartment, email, phone, website, company, favorite, id } = newContact;
  
    return (
      <div className='add-contact-wrapper'>
        <div className='add-contact'>
          
          <Link to='/' className='add-contact__close' />

          <h2 className='add-contact__title'>Add new contact</h2>

          <section className='add-contact__main-section'>
            <div className={ favorite
                             ? 'add-contact__favorite'
                             : 'add-contact__favorite'.concat(' not-favorite')}
                 onClick={() => this.changeParameter('favorite', !favorite)} />
            <div>
              <span className='description'>avatar: </span>
              <input className='input-small' defaultValue={avatar} placeholder='avatar url'
                     onChange={(event) => this.changeParameter('avatar', event.target.value)}/>
            </div>
            <div>
              <span className='description'>name: </span>
              <input className='input-small' type='text' defaultValue={name} placeholder='name'
                     onChange={(event) => this.changeParameter('name', event.target.value)} />
            </div>
          </section>

          <section className='add-contact__address-section'>
            <div className='add-contact__address-section-title'>address</div>
            <div className='add-contact__address-section-city'>
              <span className='description'>city: </span>
              <input className='input-small' type='text' defaultValue={city} placeholder='city'
                     onChange={(event) => this.changeParameter('city', event.target.value)} />
            </div>
            <div className='add-contact__address-section-street'>
              <span className='description'>street: </span>
              <input className='input-small' type='text' defaultValue={street} placeholder='street'
                     onChange={(event) => this.changeParameter('street', event.target.value)} />
            </div>
            <div className='add-contact__address-section-apartment'>
              <span className='description'>apartment: </span>
              <input className='input-small' type='text' defaultValue={apartment} placeholder='apartment'
                     onChange={(event) => this.changeParameter('apartment', event.target.value)} />
            </div>
          </section>

          <section className='add-contact__contacts-section'>
            <div className='add-contact__contacts-section-title'>contacts</div>
            <div className='add-contact__contacts-section-email'>
              <span className='description'>email: </span>
              <input className='input-small' type='text' defaultValue={email} placeholder='email'
                     onChange={(event) => this.changeParameter('email', event.target.value)} />
            </div>
            <div className='add-contact__contacts-section-phone'>
              <span className='description'>phone: </span>
              <input className='input-small' type='text' defaultValue={phone} placeholder='phone'
                     onChange={(event) => this.changeParameter('phone', event.target.value)} />
            </div>
            <div className='add-contact__contacts-section-website'>
              <span className='description'>website: </span>
              <input className='input-small' type='text' defaultValue={website} placeholder='website'
                     onChange={(event) => this.changeParameter('website', event.target.value)} />
            </div>
            <div className='add-contact__contacts-section-company'>
              <span className='description'>company: </span>
              <input className='input-small' type='text' defaultValue={company} placeholder='company'
                     onChange={(event) => this.changeParameter('company', event.target.value)} />
            </div>
          </section>

          <Link to={`/${id}/`} className='add-contact__add-contact'
                onClick={() => addContact(contacts, newContact) }>
            Add contact
          </Link>
          <Link to='/' className='add-contact__cancel'>Cancel</Link>

        </div>
      </div>
    );
  };
};

AddContactPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  }
};

const mapDispatchToProps = { addContact };

export default connect(mapStateToProps, mapDispatchToProps)(AddContactPage);