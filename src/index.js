import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore , compose} from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  reducers,
  compose(
    process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
//rootに.Appの中身が入る
//{}もかぶるので{{}}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));