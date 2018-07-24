import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Grid from '../Grid';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Grid/>
      </Provider>
    );
  }
}

export default App;
