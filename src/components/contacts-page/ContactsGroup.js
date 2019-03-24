import React from 'react';
import PropTypes from 'prop-types';

const Group = ({ groupBy }) => {
  return (
    <div className='contacts__group'>{groupBy}</div>
  );
};

Group.propTypes = {
  groupBy: PropTypes.string.isRequired
};

export default Group;