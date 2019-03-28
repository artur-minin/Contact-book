import React from 'react';
import { withRouter } from 'react-router-dom';

const NotFoundPage = ({ location }) => {

  const { pathname } = location;

  return (
    <div className='not-found'>
      <div className='not-found__text'>Page with the address "{pathname}" not found.</div>
    </div>
  );
};

export default withRouter(NotFoundPage);