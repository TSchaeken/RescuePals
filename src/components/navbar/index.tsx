import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Logo = require('../../images/Logo.png');
const facebook = require('../../images/if_facebook_circle_color_107175.svg');

const styles = require('./navbar.css');

class Nav extends Component {
  render() {
    return (
      <div className={styles['nav-main']}>
        <div className={styles['left-nav']}>
          <div className={styles['img-container']}>
            <img src={Logo} className={styles['img']} />
          </div>
        </div>
        <div className={styles['right-nav']}>
          <div className={styles['nav-button-container']}>
            <Link to="/">
              <button className={styles['nav-button']}>Home</button>
            </Link>
            <Link to="/adopt">
              <button className={styles['nav-button']}>Adopt</button>
            </Link>
            <button className={styles['nav-button']}>About</button>
          </div>
          <a href="https://www.facebook.com/Rescue-Pals-145463035523028/" target="_blank">
            <img className={styles['social']} src={facebook} />
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
