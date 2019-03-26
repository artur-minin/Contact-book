import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import EditContact from '../edit-contact/EditContact';

class MoreAboutContactPage extends Component {

  state = {
    editorVisible: false
  }

  toggleEditorVisible = () => {
    this.setState(prevState => {
      return {
        editorVisible: !prevState.editorVisible
      }
    })
  }

  render() {
    const { editorVisible } = this.state;
    const { id, contacts } = this.props;

    const contact = contacts.find(contact => id === contact.id);
    const { avatar, name, address, email, phone, website, company, favorite } = contact;

    return (
      <div className='moreAboutContact-wrapper'>
        <div className='moreAboutContact'>
          <Link to='/' className='moreAboutContact__close'/>
          <section className='moreAboutContact__main-section'>
            <img className='moreAboutContact__main-section-photo' src={avatar} alt='avatar' />
            <div className='moreAboutContact__main-section-name'>{name}</div>
            <div className={favorite ? 'moreAboutContact__favorite' : 'moreAboutContact__favorite'.concat(' not-favorite')} />
            <button className='moreAboutContact__edit' onClick={() => this.toggleEditorVisible()}>
              Edit
            </button>
          </section>
          <section className='moreAboutContact__address-section'>
            <div className='moreAboutContact__address-section-title'>address</div>
            <div className='moreAboutContact__address-section-city'>
              <span className='description'>city: </span>
              {address.city}
            </div>
            <div className='moreAboutContact__address-section-street'>
              <span className='description'>street: </span>
              {address.streetA}
            </div>
            <div className='moreAboutContact__address-section-apartment'>
              <span className='description'>apartment: </span>
              {address.streetD}
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
        {
          editorVisible ? <EditContact currentContact={contact}
                                       toggleEditorVisible={this.toggleEditorVisible} /> : null
        }
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

export default connect(mapStateToProps)(MoreAboutContactPage);