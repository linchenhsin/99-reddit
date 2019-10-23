// @flow

import { SET_LAYOUT, SET_SORT, SET_MODE } from '~/actions/preference';

import { SORT, LAYOUT, MODE } from '~/constants';

import type { Preference } from '~/types';

const initialState = {
  sort: SORT.HOT,
  layout: LAYOUT.CARD,
  mode: MODE.DARK,
};

export default function (
  state: Preference = initialState,
  action: {
    type: string, payload: any
  }
) {
  switch ( action.type ) {
    case SET_LAYOUT: {
      const {
        payload: layout,
      } = action;
      return {
        ...state,
        layout,
      };
    }
    case SET_SORT: {
      const {
        payload: sort,
      } = action;
      return {
        ...state,
        sort,
      };
    }
    case SET_MODE: {
      const {
        payload: mode,
      } = action;
      return {
        ...state,
        mode,
      };
    }
    default:
      return state;
  }
}
