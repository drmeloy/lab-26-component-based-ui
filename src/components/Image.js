import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  static propTypes = {
    image:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

  render() {
    const { image, name, id } = this.props;

    return (
      <figure>
        <img src={image} alt={name} />
        <figcaption>{id}</figcaption>
      </figure>
    );
  }
}