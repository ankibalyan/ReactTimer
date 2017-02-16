import React from 'react';
import ReactDOM from 'react-dom';

require('!style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <h1>Welcome to Timer APP</h1>,
  document.getElementById('app')
);
