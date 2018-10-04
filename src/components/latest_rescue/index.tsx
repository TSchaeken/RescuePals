import React, { Component } from 'react';
import Loader from '../loader';

const styles = require('./latest_rescue.css');

export interface FeatureProps {
  animalInfo?: any;
}

export default class Feature extends Component<FeatureProps> {
  constructor(props: FeatureProps) {
    super(props);
  }

  render() {
    const { animalInfo } = this.props;
    return animalInfo.length > 1 ? (
      <div className={styles['main']}>
        <img src={animalInfo[0].animalPictures[0].original.url} className={styles['animal-img']}/>
      </div>
    ) : (
      <div>
        <Loader />
      </div>
    );
  }
}
