/* eslint-disable camelcase */
// @flow

import { Dispatch } from 'react-redux';

import { LOADING_STATUS, SORT } from '~/constants';
import SubredditAPI from '~/apis/SubredditAPI';
// import UserApi from '~/apis/UserApi';


import {
  updateAboutLoadingStatus, updateAbout, addThreads,
} from '~/actions/subreddit';

export const fetchSubredditAbout = ( subreddit: string ) => ( dispatch: Dispatch ) => {
  console.log( 'fetching subreddit', subreddit );
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
  console.log( 'fetching threads', subreddit );
  return SubredditAPI.search( subreddit, sort, params )
    .then( data => {
      const { after, before, threadModels } = data;
      dispatch( addThreads( { after, before, threadModels } ) );
    } )
    .catch( error => {
      console.log( error );
    } );
};
