import React, { Component } from 'react';
import CardContainer from './card_container/card.container';
import { Switch, Route } from 'react-router';
import Navbar from './navbar';
import Home from './home';
import AnimalInfo from './animal_info';
import { fetchPets } from './helpers';

const styles = require('./App.css');

interface AppState {
  animalData?: [];
}

class App extends Component<AppState> {
  state: AppState = {
    animalData: []
  };

  componentDidMount() {
    fetchPets().then(res => {
      this.setState({
        animalData: res
      });
      console.log(res);
    });
  }

  render() {
    const { animalData } = this.state;
    return (
      <div>
        <Navbar/>
        <div className={styles['main']}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/adopt"
              render={props => (
                <CardContainer {...props} animalInfo={animalData} />
              )}
            />
            <Route
              path="/:name"
              render={props => (
                <AnimalInfo {...props} animalInfo={animalData} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
