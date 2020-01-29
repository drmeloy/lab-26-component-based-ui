import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

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
      <div class={styles.Character}>
        <div style={{ position: 'relative' }}>
          <img src={image} alt={name} />
          <div className={styles.banner}><h2>{name}</h2><br></br><p>{id}</p></div>
        </div>
        <ul>
          <li>
            <span className={styles.left} >Status</span>
            <span className={styles.right} >{status}</span>
          </li><br />
          <li>
            <span className={styles.left} >Species</span>
            <span className={styles.right} >{species}</span>
          </li><br />
          <li>
            <span className={styles.left} >Gender</span>
            <span className={styles.right} >{gender}</span>
          </li><br />
          <li>
            <span className={styles.left} >Origin</span>
            <span className={styles.right} >{origin}</span>
          </li><br />
          <li>
            <span className={styles.left} >Last Location</span>
            <span className={styles.right} >{lastLocation}</span>
          </li><br />
        </ul>
      </div>
    );
  }
}