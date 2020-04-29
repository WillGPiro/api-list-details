import React from 'react';
import PropTypes from 'prop-types';

const Header = () => ({ onSubmit, buttonText = 'Return Home' }) => (
  <>
    <div className='header'>
      <form onSubmit={onSubmit}>
        <button>{buttonText}</button>
      </form>
    </div>
  </>
);

Header.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string
};

export default Header;

