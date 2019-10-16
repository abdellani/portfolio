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

const IMDB = React.lazy(() => import('./imdb'))
const OnlineStore = React.lazy(() => import('./onlineStore'))
const App = () =>
  <Router>
    <div>

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
        <Route>
          <nav>
            <ul>
              <li>
                <Link to="/imdb" target="_blank" >imdb</Link>
              </li>
              <li>
                <Link to="/online-store" target="_blank">online store</Link>
              </li>
            </ul>
          </nav>
        </Route>
      </Switch>
    </div>
  </Router>

ReactDOM.render(<App />, document.getElementById('root'));

