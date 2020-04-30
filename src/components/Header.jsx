import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = () => (
  <>
    <h1>X-Files API Viewer</h1>
    <header>The Truth Is Out There</header>
    <Link to ="/" >Return Home</Link>
  </>
);

Header.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string
};

export default Header;

