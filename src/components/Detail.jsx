import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ name, image, status, occupation, actor }) => (
  <section>
    <h2>
      Name: {name}
    </h2>
    <img src={image}></img>
    <ul>Status: {status}</ul>
    <ul>Occupation: {occupation}</ul>
    <ul>Actor: {actor} </ul>
  </section>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired
};

export default Detail; 

