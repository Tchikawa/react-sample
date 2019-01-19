import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//rootに.Appの中身が入る
//{}もかぶるので{{}}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
