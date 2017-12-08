import React, { Component } from 'react';
import ListingApp from '../containers/listing-container';
import GoToCartApp from '../containers/gotocart-container';
import summaryApp from '../containers/summary-container';

import { Router, Route, hashHistory, browserHistory } from 'react-router';

export default class App extends Component {
  render() {
    return (
        <Router history = {browserHistory}>
      		<Route exact path="/" component={ListingApp} />
      		<Route path="/cart" component={GoToCartApp} />
          <Route path="/success" component={summaryApp} />
  		  </Router>
    );
  }
}


