import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Board knightPosition={[0,0]} />,
  document.getElementById('root')
);

registerServiceWorker();
