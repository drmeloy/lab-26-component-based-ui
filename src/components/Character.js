import React, { Component } from 'react';
import Image from './Image';
import Info from './Info';
import PropTypes from 'prop-types';


export default class Character extends Component {
  static propTypes = {
    image:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status:PropTypes.string.isRequired,
    species:PropTypes.string.isRequired,
    gender:PropTypes.string.isRequired,
    origin:PropTypes.string.isRequired,
    lastLocation:PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

  render() {
    const { image, name, id, status, species, gender, origin, lastLocation } = this.props;

    return (
      <>
        <Image image={image} name={name} id={id} />
        <Info status={status} species={species} gender={gender} origin={origin} lastLocation={lastLocation} />
      </>
    );
  }
}