import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeTheme } from '../../actions/index';

import { Link } from 'react-router-dom';

class Controls extends Component {

  render() {
    const { theme, changeTheme, changeSortType, toggleFavorites, handleSearch, sortType, onlyFavorites } = this.props;

    return (
      <div className='contacts__controls'>
        
        <div className='contacts__controls-sort'>
          <div onClick={sortType === 'alphabetically'
                                      ? () => changeSortType('reverse')
                                      : () => changeSortType('alphabetically')}
               className={sortType === 'alphabetically'
                                       ? 'contacts__controls-sort-sortByAlphabet'
                                       : 'contacts__controls-sort-sortByAlphabet'.concat(' reverse')} />
          <div onClick={toggleFavorites}
               className={ onlyFavorites ? 'contacts__controls-sort-favorites'.concat(' onlyFavorites')
                                         : 'contacts__controls-sort-favorites'} />                    
        </div>
        
        <div onClick={ theme === 'light' ? () => changeTheme('dark') : () => changeTheme('light') }
             className={theme === 'light' 
                                          ? 'contacts__controls-change-theme'
                                          : 'contacts__controls-change-theme'.concat(' dark') } />

        <Link to='/add-contact' className='contacts__controls-add-contact' />     

        <input className='contacts__controls-search' type='text' placeholder='Search...'
               onChange={(event) => handleSearch(event.target.value)} />
        
      </div>
    )
  }
}

Controls.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeSortType: PropTypes.func.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  onlyFavorites: PropTypes.bool.isRequired
}

const mapStateToProps = ({ theme }) => {
  return {
    theme
  }
}

const mapDispatchToProps = { changeTheme };

export default connect(mapStateToProps, mapDispatchToProps)(Controls);