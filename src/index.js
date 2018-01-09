import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LY from 'lvyii_storage'

LY.init({
  appId: '3zE73WUYaUvEQUclCyiPQuqr',
  appKey: 'VZbSM9RoutQ7X3yHTGOLiyZgR1Fhqmok',
  serverURLs: 'http://localhost:6800',
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
