// @flow

import { combineReducers } from 'redux';

import preference from './preference';
import subreddit from './subreddit';
import users from './users';
import widgets from './widgets';

export default combineReducers(
  {
    preference,
    subreddit,
    users,
    widgets,
  }
);
