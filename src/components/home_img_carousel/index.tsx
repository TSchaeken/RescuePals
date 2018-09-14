import React, { Component } from 'react';

const Jenny = require('../../images/scroll_jenny.jpg');

const PictureArray = [Jenny];

class Carousel extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    const { active } = this.state;
    return (
      <div>
        <img src={PictureArray[0]} />
      </div>
    );
  }
}

export default Carousel;
