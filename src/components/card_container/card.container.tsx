import React, { Component } from 'react';
import { fetchPets } from '../helpers/index';
import animalCard from '../animal_cards/animalcard';

const styles = require('./card.container.css');

export interface CardContainerState {
  count?: number;
  animalData?: any;
}

export default class CardContainer extends Component<CardContainerState> {
  state: CardContainerState = {
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
