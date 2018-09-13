import React, { Component } from 'react';
import PictureContainer from '../animal_info_picture';

const styles = require('./info.css');

export interface InfoProps {
  animalInfo?: [];
  match?: any;
}

interface AnimalData {
  animalName?: string;
  animalBreed?: string;
  animalColor?: string;
  animalPictures?: any;
}

interface InfoState {
  animalData?: AnimalData;
}

class Info extends Component<InfoProps, InfoState> {
  constructor(props: InfoProps) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { match } = this.props;
    this.fetchFriend(match.params.name);
  }

  fetchFriend(match: string) {
    const { animalInfo } = this.props;
    const animal = animalInfo!.find(
      (animal: any) => animal.animalName.toLowerCase() === match
    );
    this.setState({
      animalData: animal
    });
  }

  render() {
    const animalData = this.state.animalData;

    if (animalData) {
      return (
        <div className={styles['info-container']}>
          <div className={styles['picture-container']}>
              <PictureContainer pictures={animalData.animalPictures} />
          </div>
          <div className={styles['content-container']}>
            <p>Hi, I'm {animalData.animalName}</p>
            <p>`Color | {animalData.animalColor}`</p>
            <p>`Breed | {animalData.animalBreed}`</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Hi there</p>
        </div>
      );
    }
  }
}

export default Info;
