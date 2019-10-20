import { combineReducers } from 'redux';

import preference from './preference';
import subreddit from './subreddit';
import users from './users';

export default combineReducers(
  {
    preference,
    subreddit,
    users,
  }
);
