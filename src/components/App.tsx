import React, { Component } from 'react';
import CardContainer from './card_container/card.container';
import { Switch, Route } from 'react-router';
import Navbar from './navbar';
import Home from './home';
import AnimalInfo from './animal_info';
import { fetchPets } from './helpers';

class App extends Component {
  state = {
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
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/adopt"
            render={props => <CardContainer {...props} animalinfo={animalData} />}
          />
          <Route path="/:name" component={AnimalInfo} />
        </Switch>
      </div>
    );
  }
}

export default App;
