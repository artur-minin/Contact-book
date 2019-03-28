import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteContact } from '../../actions/index';


class MoreAboutContactPage extends Component {

  render() {
    const { id, contacts, deleteContact } = this.props;

    const contact = contacts.find(contact => id === contact.id);
    const { avatar, name, address, email, phone, website, company, favorite } = contact;

    return (
      <div className='more-about-contact-wrapper'>
        <div className='more-about-contact'>
          
          <Link to='/' className='more-about-contact__close' />
          
          <section className='more-about-contact__main-section'>
            <img className='more-about-contact__main-section-photo' src={avatar} alt='avatar' />
            <div className='more-about-contact__main-section-name'>{name}</div>
            <div className={  favorite
                              ? 'more-about-contact__favorite'
                              : 'more-about-contact__favorite'.concat(' not-favorite')} />
                              
            <div className='more-about-contact__buttons'>                
              <Link to={`/${id}/edit`} className='more-about-contact__edit'>
                Edit
              </Link>
              <Link to='/' className='more-about-contact__delete'
                    onClick={() => deleteContact(contacts, id)}>
                Delete contact
              </Link>
            </div>  
          </section>

          <section className='more-about-contact__address-section'>
            <div className='more-about-contact__address-section-title'>address</div>
            <div className='more-about-contact__address-section-city'>
              <span className='description'>city: </span>
              {address.city}
            </div>
            <div className='more-about-contact__address-section-street'>
              <span className='description'>street: </span>
              {address.streetA}
            </div>
            <div className='more-about-contact__address-section-apartment'>
              <span className='description'>apartment: </span>
              {address.streetD}
            </div>
          </section>

          <section className='more-about-contact__contacts-section'>
            <div className='more-about-contact__contacts-section-title'>contacts</div>
            <div className='more-about-contact__contacts-section-email'>
              <span className='description'>email: </span>
              {email}
            </div>
            <div className='more-about-contact__contacts-section-phone'>
              <span className='description'>phone: </span>
              {phone}
            </div>
            <div className='more-about-contact__contacts-section-website'>
              <span className='description'>website: </span>
              <a className='description' href={`http://${website}`} target='_blank' rel='noopener noreferrer'>{website}</a>
            </div>
            <div className='more-about-contact__contacts-section-company'>
              <span className='description'>company: </span>
              {company.name}
            </div>
          </section>
          
        </div>
      </div>
    ); 
  };
};

MoreAboutContactPage.propTypes = {
  id: PropTypes.number.isRequired,
  contacts: PropTypes.array.isRequired
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  };
};

const mapDispatchToProps = { deleteContact };

export default connect(mapStateToProps, mapDispatchToProps)(MoreAboutContactPage);