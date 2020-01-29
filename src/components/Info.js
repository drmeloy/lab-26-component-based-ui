import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    const { status, species, gender, origin, lastLocation } = this.props;

    return (
        <ul>
          <li><span>Status</span><span>{status}</span></li>
          <li><span>Species</span><span>{species}</span></li>
          <li><span>Gender</span><span>{gender}</span></li>
          <li><span>Origin</span><span>{origin}</span></li>
          <li><span>Last Location</span><span>{lastLocation}</span></li>
        </ul>
    );
  }
}