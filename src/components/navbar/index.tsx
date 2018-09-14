import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Logo = require('../../images/Logo.png');
const styles = require('./navbar.css');

class Nav extends Component {
  render() {
    return (
      <div className={styles['nav-main']}>
        <div className={styles['img-container']}>
          <img src={Logo} className={styles['img']} />
        </div>
        <div className={styles['nav-button-container']}>
          <Link to="/">
            <button className={styles['nav-button']}>Home</button>
          </Link>
          <Link to="/adopt">
            <button className={styles['nav-button']}>Adopt</button>
          </Link>
          <button className={styles['nav-button']}>About</button>
        </div>
      </div>
    );
  }
}

export default Nav;
