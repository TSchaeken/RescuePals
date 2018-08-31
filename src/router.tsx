import React, { Component } from 'react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default Router;
