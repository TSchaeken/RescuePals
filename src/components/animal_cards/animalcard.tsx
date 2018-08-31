import React from 'react';

const styles = require('./animalcard.css');

const animalCard = (data: any) => (
  <div key={data.animalName} className={styles.container}>
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src={data.animalPictures[0].urlSecureFullsize}
      />
    </div>
    <div className={styles.containerDetail}>
      <span className={styles.containerTitleText}>{data.animalName}</span>
      <span className={styles.containerDetailText}>
        click me to fall in love!
      </span>
    </div>
  </div>
);

export default animalCard;
