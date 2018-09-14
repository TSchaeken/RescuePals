import React, { Component } from 'react';
import Carousel from '../home_img_carousel';

const styles = require('./home.css');

class Home extends Component {
  render() {
    return (
      <div className={styles['home-main']}>
        <h1>HOME</h1>
        <Carousel />
      </div>
    );
  }
}

export default Home;
