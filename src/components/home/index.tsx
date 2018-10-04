import React, { Component } from 'react';
import Carousel from '../home_img_carousel';
import Feature from '../latest_rescue';
import Map from '../location_map';

const styles = require('./home.css');

export interface HomeProps {
  animalInfo?: any;
}

class Home extends Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Carousel />
        <div className={styles['home-main-container']}>
          <div className={styles['text-left']}>
            Aenean condimentum porta massa, sed congue nibh laoreet eget. In hac
            habitasse platea dictumst. Sed ultrices ligula eu ultrices bibendum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
            purus lorem. Fusce eget efficitur ipsum, sed consectetur lacus.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean
            egestas sapien vitae lectus rutrum, eu mattis lectus gravida.
            Suspendisse scelerisque leo nulla, vitae egestas eros sagittis nec.
            Pellentesque convallis dolor a diam tincidunt, ac venenatis eros
            cursus. Proin lacus nulla, euismod at mattis non, pellentesque
            egestas justo. Nunc ornare faucibus ligula, non elementum nisl
            interdum eu. Vestibulum tincidunt quis lectus quis suscipit. Donec
            commodo nec ligula vitae feugiat. Curabitur luctus orci ac est
            facilisis dignissim. Praesent sodales ex lorem, a suscipit diam
            varius at. Aliquam pharetra felis id dictum feugiat. Praesent id
            tempus orci. Fusce sodales, massa at finibus viverra, lectus augue
            posuere urna, non sagittis odio ipsum vel tellus. Suspendisse
            pharetra malesuada felis, eget sollicitudin dolor.
          </div>
          <div className={styles['text-right']}>
            <Feature animalInfo={this.props.animalInfo} />
          </div>
        </div>
        <div className={styles['location-map']}>
          <Map />
        </div>
      </div>
    );
  }
}

export default Home;
