import React, { Component } from 'react';
import { fetchPets, animalCard } from './helpers/index';

const styles = require('./app.css');

export interface AppState {
  count?: number;
  animalData?: any;
}

export default class App extends Component<AppState> {
  state: AppState = {
    count: 1,
    animalData: []
  };

  componentDidMount() {
    fetchPets().then(res => {
      this.setState({
        animalData: res
      });
    });
  }

  render() {
    const { animalData } = this.state;
    return (
      <div className={styles.contentContainer}>
        {animalData ? (
          animalData.map((animal: any[]) => animalCard(animal))
        ) : (
          <h1>They're coming!</h1>
        )}
      </div>
    );
  }
}
