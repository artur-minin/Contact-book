import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { changeContact } from '../../actions/index';

class EditContact extends Component {

  state = {
    name: this.props.currentContact.name,
    city: this.props.currentContact.address.city,
    street: this.props.currentContact.address.streetA,
    apartment: this.props.currentContact.address.streetD,
    email: this.props.currentContact.email,
    phone: this.props.currentContact.phone,
    website: this.props.currentContact.website,
    company: this.props.currentContact.company.name,
    favorite: this.props.currentContact.favorite,
    id: this.props.currentContact.id
  }

  changeParameter = (parameter, value) => {
    this.setState(() => {
      return {
        [parameter]: value
      }
    })
  }

  toggleFavorite = () => {
    this.setState( prevState => {
      return {
        favorite: !prevState.favorite
      }
    })
  }


  render() {
    const { contacts, currentContact, toggleEditorVisible, changeContact } = this.props;

    const { avatar, name, address, email, phone, website, company } = currentContact;
    const changedProps = { ...this.state };

    return (
      <div className='editContact-wrapper'>
        <Link to='/' className='moreAboutContact__close' />

        <section className='editContact__main-section'>
          <img className='editContact__main-section-photo' src={avatar} alt='avatar' />
          <input className='input-big' type='text' defaultValue={name}
                 onChange={(event) => this.changeParameter('name', event.target.value)} />
          <div className={this.state.favorite ? 'editContact__favorite' :
                                                'editContact__favorite'.concat(' not-favorite')}
               onClick={() => this.toggleFavorite()} />
          <button className='editContact__save' onClick={() => changeContact(contacts, currentContact, changedProps) }>
            Save
          </button>
          <button className='editContact__cancel' onClick={() => toggleEditorVisible()}>
            Cancel
          </button>
        </section>

        <section className='editContact__address-section'>
          <div className='editContact__address-section-title'>address</div>
          <div className='editContact__address-section-city'>
            <span className='description'>city: </span>
            <input className='input-small' type='text' defaultValue={address.city}
                   onChange={(event) => this.changeParameter('city', event.target.value)} />
          </div>
          <div className='editContact__address-section-street'>
            <span className='description'>street: </span>
            <input className='input-small' type='text' defaultValue={address.streetA}
                   onChange={(event) => this.changeParameter('street', event.target.value)} />
          </div>
          <div className='editContact__address-section-apartment'>
            <span className='description'>apartment: </span>
            <input className='input-small' type='text' defaultValue={address.streetD}
                   onChange={(event) => this.changeParameter('apartment', event.target.value)} />
          </div>
        </section>

        <section className='editContact__contacts-section'>
          <div className='editContact__contacts-section-title'>contacts</div>
          <div className='editContact__contacts-section-email'>
            <span className='description'>email: </span>
            <input className='input-small' type='text' defaultValue={email}
                   onChange={(event) => this.changeParameter('email', event.target.value)} />
          </div>
          <div className='editContact__contacts-section-phone'>
            <span className='description'>phone: </span>
            <input className='input-small' type='text' defaultValue={phone}
                   onChange={(event) => this.changeParameter('phone', event.target.value)} />
          </div>
          <div className='editContact__contacts-section-website'>
            <span className='description'>website: </span>
            <input className='input-small' type='text' defaultValue={website}
                   onChange={(event) => this.changeParameter('website', event.target.value)} />
          </div>
          <div className='editContact__contacts-section-company'>
            <span className='description'>company: </span>
            <input className='input-small' type='text' defaultValue={company.name}
                   onChange={(event) => this.changeParameter('company', event.target.value)} />
          </div>
        </section>

      </div>
    );
  };
};

EditContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  currentContact: PropTypes.object.isRequired,
  toggleEditorVisible: PropTypes.func,
  changeContact: PropTypes.func.isRequired
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  }
};

const mapDispatchToProps = { changeContact };

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);