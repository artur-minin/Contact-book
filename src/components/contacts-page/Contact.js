import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Contact = ({avatar, name, email, phone, city, website, isFavorite, id}) => {

  return (
    <div className='contact'>
      <img className='contact__photo' src={avatar} alt='avatar'/>
      <div className='contact__information'>
        <div className={isFavorite ? 'contact__information-favorite' : 'contact__information-favorite'.concat(' not-favorite')} />
        <div className='contact__information-name'>{name}</div>
        <div className='contact__information-email'>
          <span className='grey'>email: </span>
          {email}
        </div>
        <div className='contact__information-phone'>
          <span className='grey'>phone: </span>
          {phone}
        </div>
        <div className='contact__information-website'>
          <span className='grey'>website: </span>
          <a href={`http://${website}`} target='_blank' rel='noopener noreferrer'>{website}</a>
        </div>
        <div className='contact__information-city'>
          <span className='grey'>city: </span>
          {city}
        </div>
      </div>
      <Link to={`/${id}`} className='contact__more'>more...</Link>
    </div>
  );
};

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default Contact;