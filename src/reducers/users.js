// @flow

import {
  ADD_USER,
} from '~/actions/users';

import type { Users } from '~/types';

const initialState = {
  models: {},
};

export default function ( state: Users = initialState, action: {type: string, payload: any} ) {
  switch ( action.type ) {
    case ADD_USER: {
      const {
        payload: user,
      } = action;

      return {
        ...state,
        models: {
          ...state.models,
          [ user.id ]: user,
        },
      };
    }
    default:
      return state;
  }
}
