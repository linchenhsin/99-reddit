/* eslint-disable camelcase */
// @flow

import { Dispatch } from 'react-redux';

import { LOADING_STATUS, SORT } from '~/constants';
import SubredditAPI from '~/apis/SubredditAPI';
// import UserApi from '~/apis/UserApi';

import { setSort } from '~/actions/preference';

import {
  updateAboutLoadingStatus, updateAbout,
  fetchingSortThreads, fetchingMoreThreads,
  addThreads, addThreadsOnSortChange,
} from '~/actions/subreddit';

export const fetchSubredditAbout = ( subreddit: string ) => ( dispatch: Dispatch ) => {
  dispatch( updateAboutLoadingStatus( LOADING_STATUS.LOADING ) );
  return SubredditAPI.about( subreddit )
    .then( data => {
      dispatch( updateAbout( data ) );
    } )
    .catch( error => {
      console.log( error );
    } );
};


type Params = {
  after?: string,
  t?: 'hour' | ' day' | ' week' | ' month' | ' year' | ' all'
}
export const fetchThreads = (
  subreddit: string,
  sort: $Values<typeof SORT>,
  params?: Params
) => ( dispatch: Dispatch ) => {
  dispatch( fetchingMoreThreads() );
  return SubredditAPI.search( subreddit, sort, params )
    .then( data => {
      const {
        after, before, threadModels, hasMore,
      } = data;
      dispatch( addThreads( {
        after, before, threadModels, hasMore,
      } ) );
    } )
    .catch( error => {
      console.log( error );
    } );
};


export const fetchThreadsOnSortChange = (
  subreddit: string,
  sort: $Values<typeof SORT>,
  params?: Params
) => ( dispatch: Dispatch ) => {
  dispatch( fetchingSortThreads() );
  dispatch( setSort( sort ) );
  return SubredditAPI.search(
    subreddit,
    sort, { ...params, after: undefined }
  )
    .then( data => {
      const {
        after, before, threadModels, hasMore,
      } = data;
      dispatch( addThreadsOnSortChange( {
        after, before, threadModels, hasMore,
      } ) );
    } )
    .catch( error => {
      console.log( error );
    } );
};
