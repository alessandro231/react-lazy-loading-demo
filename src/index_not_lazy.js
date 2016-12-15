import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import rootRoute from './routes';

import App from './App';
import SliderModule from './modules/slider/SliderModule';
import Charts from './modules/charts/Charts';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/slider" component={SliderModule}/>
      <Route path="/charts" component={Charts}/>
    </Route>
  </Router>,
  document.getElementById('app')
);