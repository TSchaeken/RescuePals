import React, { Component } from 'react';

const styles = require('./loader.css')

export default class Loader extends Component {
  render(){
    return <div className={styles['loader']}></div>
  }
}