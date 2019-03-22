import React from 'react';
import { withRouter } from 'react-router-dom';

const NotFoundPage = ({ location }) => {

  const { pathname } = location;

  return (
    <div className='notFound'>
      <div className='notFound__text'>{`Page with the address "${pathname}" not found.`}</div>
    </div>
  );
};

export default withRouter(NotFoundPage);