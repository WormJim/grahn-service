import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './container/Users';
import Event from './container/EventDetail';
import asyncComponent from './hoc/asyncComponent';
import Axios from 'axios';

const AsyncPizza = asyncComponent(() => {
  return import('./container/Pizza.js');
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Event</Link> | <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Event} />
          <Route path="/pizza" component={AsyncPizza} />
        </div>
      </div>
    );
  }
}

export default App;
