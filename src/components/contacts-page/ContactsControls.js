import React, { Component } from 'react';

class Controls extends Component {

  render() {
    const { changeSortType, toggleFavorites, handleSearch, sortType, onlyFavorites } = this.props;

    return (
      <div className='contacts__controls'>
        <div className='contacts__controls-sort'>
          <div onClick={sortType === 'alphabetically' ? () => changeSortType('reverse') : () => changeSortType('alphabetically')}
            className={sortType === 'alphabetically' ? 'contacts__controls-sort-sortByAlphabet' :
              'contacts__controls-sort-sortByAlphabet'.concat(' reverse')} />
          <div onClick={toggleFavorites}
            className={onlyFavorites ? 'contacts__controls-sort-favorites'.concat(' onlyFavorites') :
              'contacts__controls-sort-favorites'} />
        </div>
        <input className='contacts__controls-search' type='text' placeholder='Search contact...'
          onChange={(event) => handleSearch(event.target.value)} />
      </div>
    )
  }
}

export default Controls;