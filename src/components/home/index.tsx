import React, { Component } from 'react';

const styles = require('./home.css');

class Home extends Component {
  render() {
    return <div className={styles['home-main']}>
      <h1>HOME</h1>
    </div>;
  }
}

export default Home;
