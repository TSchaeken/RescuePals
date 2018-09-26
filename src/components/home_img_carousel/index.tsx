import React, { Component } from 'react';

const Jenny = require('../../images/scroll_jenny.jpg');

const styles = require('./index.css')


const PictureArray = [Jenny];

class Carousel extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <div className={styles['img-container']}>
        <img src={PictureArray[0]} className={styles['img-active']}/>
      </div>
    );
  }
}

export default Carousel;
