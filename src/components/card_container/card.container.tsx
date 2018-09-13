import React, { Component } from 'react';
import animalCard from '../animal_cards/animalcard';

const styles = require('./card.container.css');

export interface CardContainerProps {
  animalInfo?: [];
}

export default class CardContainer extends Component<CardContainerProps> {
  constructor(props: CardContainerProps) {
    super(props);
  }

  render() {
    const { animalInfo } = this.props;
    return (
      <div className={styles.contentContainer}>
        {animalInfo ? (
          animalInfo.map((animal: any[]) => animalCard(animal))
        ) : (
          <h1>They're coming!</h1>
        )}
      </div>
    );
  }
}
