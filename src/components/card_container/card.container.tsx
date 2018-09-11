import React, { Component } from 'react';
import { fetchPets } from '../helpers/index';
import animalCard from '../animal_cards/animalcard';

const styles = require('./card.container.css');

export default class CardContainer extends Component {
  render() {
    const { animalinfo } = this.props;
    return (
      <div className={styles.contentContainer}>
        {animalinfo ? (
          animalinfo.map((animal: any[]) => animalCard(animal))
        ) : (
          <h1>They're coming!</h1>
        )}
      </div>
    );
  }
}
