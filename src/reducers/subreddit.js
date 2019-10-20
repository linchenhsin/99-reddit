// @flow

import { LOADING_STATUS, VOTE } from '~/constants';

import {
  UPDATE_ABOUT_LOADING_STATUS,
  UPDATE_ABOUT,
  ADD_THREADS,
  UPVOTE,
  DOWNVOTE,
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
    case ADD_THREADS: {
      const {
        payload: { after, before, threadModels },
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
      };
    }
    case UPVOTE: {
      const {
        payload: threadId,
      } = action;

      const oldVote = state.threadsVotes[ threadId ] || VOTE.NO_VOTE;
      const model = state.threadsModels[ threadId ];
      let { ups, downs, score } = model;
      let vote;
      switch ( oldVote ) {
        // downvote to upvote
        case VOTE.DOWNVOTE:
          vote = VOTE.UPVOTE;
          break;
        // upvote to no vote
        case VOTE.UPVOTE:
          vote = VOTE.NO_VOTE;
          break;
        // no vote to upvote
        case VOTE.NO_VOTE:
        default:
          vote = VOTE.UPVOTE;
          break;
      }

      score += vote - oldVote;
      ups += vote - oldVote;
      downs += oldVote - vote;

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
          [ threadId ]: vote,
        },
      };
    }
    case DOWNVOTE: {
      const {
        payload: threadId,
      } = action;
      const oldVote = state.threadsVotes[ threadId ] || VOTE.NO_VOTE;
      const model = state.threadsModels[ threadId ];
      let { ups, downs, score } = model;
      let vote;
      switch ( oldVote ) {
        // downvote to no vote
        case VOTE.DOWNVOTE:
          vote = VOTE.NO_VOTE;
          break;
        // upvote to downvote
        case VOTE.UPVOTE:
          vote = VOTE.DOWNVOTE;
          break;
        // no vote to downvote
        case VOTE.NO_VOTE:
        default:
          vote = VOTE.DOWNVOTE;
          break;
      }

      score += vote - oldVote;
      ups += vote - oldVote;
      downs += oldVote - vote;

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
          [ threadId ]: vote,
        },
      };
    }
    default:
      return state;
  }
}
