// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import store from '~/store';
import config from '~/config';
import SubredditPage from '~/pages/SubredditPage';

function App() {
  return (
    <Provider store={ store }>
      <SubredditPage subreddit={ config.subreddit } />
    </Provider>

  );
}

export default hot( App );
