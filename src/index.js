import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
//bootstrap
// eslint-disable-next-line 
import $ from 'jquery';
// eslint-disable-next-line 
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Portoflio from "./portfolio"

const IMDB = React.lazy(() => import('./imdb'))
const OnlineStore = React.lazy(() => import('./onlineStore'))
const Photography = React.lazy(() => import('./photography'))
const App = () =>
  <Router>
      <Switch>
        <Route path="/imdb">
          <Suspense fallback={<div>Loading</div>} >
            <IMDB />
          </Suspense>
        </Route>
        <Route path="/online-store">
          <Suspense fallback={<div>Loading</div>} >
            <OnlineStore />
          </Suspense>
        </Route>
        <Route path="/photography">
          <Suspense fallback={<div>Loading</div>} >
            <Photography />
          </Suspense>
        </Route>
        <Route>
          <Portoflio/>
        </Route>
      </Switch>
  </Router>

ReactDOM.render(<App />, document.getElementById('root'));

