import React, { Component } from 'react';

class Controls extends Component {

  state = {
    byAlphabet: true,
    onlyFavorites: false
  };

  render() {
    return (
      <div className='contacts__controls'>
        <div className='contacts__controls-sort'>
          <div className='contacts__controls-sort-sortByAlphabet' />
          <div className='contacts__controls-sort-onlyFavorites' />
        </div>
        <input className='contacts__controls-search' type='text' placeholder='Search contact...' />
      </div>
    );
  };
};

export default Controls;