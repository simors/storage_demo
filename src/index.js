import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LY from 'lvyii_storage'

LY.init({
  appId: '3zE73WUYaUvEQUclCyiPQuqr',
  appKey: 'VZbSM9RoutQ7X3yHTGOLiyZgR1Fhqmok',
  serverURLs: {
    engine: 'http://localhost:16800',
    auth: 'http://localhost:16801'
  },
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
