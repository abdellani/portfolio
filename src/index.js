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
import IMDB from './imdb';

ReactDOM.render(<IMDB />, document.getElementById('root'));

