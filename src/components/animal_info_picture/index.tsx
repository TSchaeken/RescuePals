import React, { Component } from 'react';

const styles = require('./style.css');

export interface PictureContainerProps {
  pictures: any;
}

interface PictureContainerState {
  active: any;
}

class PictureContainer extends Component<
  PictureContainerProps,
  PictureContainerState
> {
  constructor(props: PictureContainerProps) {
    super(props);
    this.state = {
      active: ''
    };
  }

  componentDidMount() {
    const { pictures } = this.props;
    this.setState({
      active: pictures[0].original.url
    });
  }

  changeOnClick(url: string) {
    this.setState({
      active: url
    });
  }

  render() {
    const { pictures } = this.props;
    const { active } = this.state;
    return (
      <div className={styles['picture-container']}>
        <div className={styles['active-img-container']}>
          <img className={styles['active-img']} src={active} />
        </div>
        <div className={styles['thumbnail-row']}>
          {pictures.map((item: any) => (
            <div
              key={item.mediaID}
              className={styles['img-thumbnail-container']}
              onClick={() => this.changeOnClick(item.original.url)}
            >
              <img
                className={styles['img-thumbnail']}
                src={item.original.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PictureContainer;
