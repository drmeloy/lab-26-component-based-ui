import React, { Component } from 'react';
import Character from './characters/Character';
import Header from './headers/Header';
import Footer from './footers/Footer';
import styles from './App.css';
import charStyles from './characters/Character.css';
import img1 from '../assets/38.jpeg';
import img2 from '../assets/84.jpeg';
import img3 from '../assets/162.jpeg';
import img4 from '../assets/213.jpeg';
import img5 from '../assets/328.jpeg';
import img6 from '../assets/392.jpeg';
import img7 from '../assets/404.jpeg';
import img8 from '../assets/426.jpeg';


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.characterSheet}>
          <Character image={img1} name="Beth Smith" id="id: 38" status="Alive" species="Human" gender="Female" origin="Earth (C-137)" lastLocation="Earth (C-137)" />
          <Character image={img2} name="Cult Leader Morty" id="id: 84" status="Alive" species="Human" gender="Male" origin="Unknown" lastLocation="Hideout Planet" />
          <Character image={img3} name="Ice-T" id="id: 162" status="Alive" species="Alien, Alphabetrian" gender="Male" origin="Alphabetrium" lastLocation="Alphabetrium" />
          <Character image={img4} name="Magnesium-J" id="id: 213" status="Alive" species="Alien, Alphabetrian" gender="Male" origin="Alphabetrian" lastLocation="Alphabetrian" />
          <Character image={img5} name="Slow Rick" id="id: 328" status="Alive" species="Human" gender="Male" origin="Unknown (C-137)" lastLocation="Citadel of Ricks" />
          <Character image={img6} name="Bearded Morty" id="id: 392" status="Alive" species="Human" gender="Male" origin="Unknown" lastLocation="Citadel of Ricks" />
          <Character image={img7} name="Michael Jackson" id="id: 404" status="Alive" species="Humanoid, Phone-Person" gender="Male" origin="Earth (Phone Dimension)" lastLocation="Earth (Phone Dimension)" />
          <Character image={img8} name="Greasy Grandma" id="id: 426" status="Alive" species="Human, Grandma" gender="Female" origin="Greasy Grandma World" lastLocation="Greasy Grandma World" />
        </div>
        <Footer />
      </>
    );
  }
};

export default App;
