import React, { Component } from 'react';

const styles = require('./footer.css')

export default class Footer extends Component {
  render(){
    return (
      <div className={styles['footer-container']}></div>
    )
  }
}