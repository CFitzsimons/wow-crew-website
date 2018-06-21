import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Styles
import 'semantic-ui-css/semantic.min.css';

// Redux store
import store from './reducers/store';

// Sample -- REMOVE DURING IMPLEMENTATION
import Sample from './components/containers/sampleContainer';

ReactDOM.render(
  <Provider store={store}>
    <Sample />
  </Provider>,
  document.getElementById('content'),
);
// Enable hot reloading
module.hot.accept();
