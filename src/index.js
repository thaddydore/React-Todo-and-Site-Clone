import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Todo from './component/Todo';
import Header from './component/Header';
import TopBar from './Project/TopBar';
import Assignment from './Project/Assignment';
import Like from './component/Like';
import Compile from './Routepractice/Compile';

ReactDOM.render(<Assignment />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
