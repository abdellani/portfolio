import React from 'react';
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
// import  IMDB from './imdb'
import OnlineStore from './onlineStore'

// const App = ()=>
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/imdb">imdb</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/imdb">
//                <Component/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>

ReactDOM.render(<OnlineStore />, document.getElementById('root'));

