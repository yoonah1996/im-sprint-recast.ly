import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { YOUTUBE_API_KEY } from '../config/youtube';

// const title = 'hello world';
console.log(App);
console.log(YOUTUBE_API_KEY);

ReactDOM.render(  // 최상위 폴더만 렌더
  <App YOUTUBE_API_KEY = {YOUTUBE_API_KEY}/>,
  document.getElementById('app')
);