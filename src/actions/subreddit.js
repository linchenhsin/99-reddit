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

export const FETCHING_MORE_THREADS = 'FETCHING_MORE_THREADS';
export const fetchingMoreThreads = () => ( {
  type: FETCHING_MORE_THREADS,
} );

export const FETCHING_SORT_THREADS = 'FETCHING_SORT_THREADS';
export const fetchingSortThreads = () => ( {
  type: FETCHING_SORT_THREADS,
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

export const ADD_THREADS_ON_SORT_CHANGE = 'ADD_THREADS_ON_SORT_CHANGE';
export const addThreadsOnSortChange = ( payload: {
  after: string,
  before: string,
  threadModels: ThreadModels
} ) => ( {
  type: ADD_THREADS_ON_SORT_CHANGE,
  payload,
} );

export const VOTE = 'VOTE';
export const vote = ( payload: {
  threadId: string,
  vote: number,
} ) => ( {
  type: VOTE,
  payload,
} );
