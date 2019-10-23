// @flow

import { LOADING_STATUS, VOTE } from '~/constants';

import {
  UPDATE_ABOUT_LOADING_STATUS,
  UPDATE_ABOUT,
  FETCHING_MORE_THREADS,
  FETCHING_SORT_THREADS,
  ADD_THREADS,
  ADD_THREADS_ON_SORT_CHANGE,
  VOTE as VOTE_ACTION,
} from '../actions/subreddit';

import type { Subreddit } from '~/types';

const initialState = {
  aboutLoadingStatus: LOADING_STATUS.NOT_LOADED,
  after: '',
  before: '',
  about: {
    description: '',
    headerImg: '',
    iconImg: '',
    iconSize: [ 0, 0 ],
    id: '',
    primaryColor: '',
    bannerBackgroundColor: '',
    bannerBackgroundImage: '',
    title: 'Reddit',
    displayNamePrefixed: '',
  },
  threadsModels: {},
  threadsOrder: [],
  threadsVotes: {},
  hasMoreThreads: true,
  isFetchingSortThreads: false,
  isFetchingMoreThreads: true,
};

export default function (
  state: Subreddit = initialState,
  action: { type: string, payload: any }
) {
  switch ( action.type ) {
    case UPDATE_ABOUT_LOADING_STATUS: {
      const {
        payload: aboutLoadingStatus,
      } = action;
      return {
        ...state,
        aboutLoadingStatus,
      };
    }
    case UPDATE_ABOUT: {
      const {
        payload: about,
      } = action;
      return {
        ...state,
        aboutLoadingStatus: LOADING_STATUS.LOADED,
        about,
      };
    }
    case FETCHING_MORE_THREADS: {
      return {
        ...state,
        isFetchingMoreThreads: true,
      };
    }
    case FETCHING_SORT_THREADS: {
      return {
        ...state,
        isFetchingSortThreads: true,
        threadsOrder: [],
      };
    }
    case ADD_THREADS: {
      const {
        payload: {
          after, before, threadModels, hasMore,
        },
      } = action;
      const order = Object.keys( threadModels );
      return {
        ...state,
        after,
        before,
        threadsModels: {
          ...state.threadsModels,
          ...threadModels,
        },
        threadsOrder: [ ...state.threadsOrder, ...order ],
        isFetchingMoreThreads: false,
        hasMoreThreads: hasMore,
      };
    }
    case ADD_THREADS_ON_SORT_CHANGE: {
      const {
        payload: {
          after, before, threadModels, hasMore,
        },
      } = action;
      const order = Object.keys( threadModels );
      return {
        ...state,
        after,
        before,
        threadsModels: {
          ...state.threadsModels,
          ...threadModels,
        },
        threadsOrder: [ ...order ],
        isFetchingSortThreads: false,
        hasMoreThreads: hasMore,
      };
    }
    case VOTE_ACTION: {
      const {
        payload: { threadId, vote },
      } = action;
      const oldVote = state.threadsVotes[ threadId ] || VOTE.UNVOTE;
      const model = state.threadsModels[ threadId ];
      let { ups, downs, score } = model;
      const newVote = vote === oldVote ? VOTE.UNVOTE : vote;
      const diff = newVote - oldVote;

      score += diff;
      ups += diff;
      downs -= diff;

      return {
        ...state,
        threadsModels: {
          ...state.threadsModels,
          [ threadId ]: {
            ...model,
            ups,
            downs,
            score,
          },
        },
        threadsVotes: {
          ...state.threadsVotes,
          [ threadId ]: newVote,
        },
      };
    }
    default:
      return state;
  }
}
