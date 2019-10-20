// @flow

import { LOADING_STATUS } from '~/constants';
import type { SubredditAbout, ThreadModels } from '~/types';

export const UPDATE_ABOUT_LOADING_STATUS = 'UPDATE_ABOUT_LOADING_STATUS';
export const updateAboutLoadingStatus = ( payload: $Values<typeof LOADING_STATUS> ) => ( {
  type: UPDATE_ABOUT_LOADING_STATUS,
  payload,
} );

export const UPDATE_ABOUT = 'UPDATE_ABOUT';
export const updateAbout = ( payload: SubredditAbout ) => ( {
  type: UPDATE_ABOUT,
  payload,
} );

export const ADD_THREADS = 'ADD_THREADS';
export const addThreads = ( payload: {
  after: string,
  before: string,
  threadModels: ThreadModels
} ) => ( {
  type: ADD_THREADS,
  payload,
} );

export const UPVOTE = 'UPVOTE';
export const upvote = ( payload: string ) => ( {
  type: UPVOTE,
  payload,
} );

export const DOWNVOTE = 'DOWNVOTE';
export const downvote = ( payload: string ) => ( {
  type: DOWNVOTE,
  payload,
} );
