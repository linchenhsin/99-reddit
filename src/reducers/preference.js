// @flow

import { SET_LAYOUT, SET_SORT } from '~/actions/preference';

import { SORT, LAYOUT } from '~/constants';

import type { Preference } from '~/types';

const initialState = {
  sort: SORT.HOT,
  layout: LAYOUT.CARD,
};

export default function ( state: Preference = initialState, action: {type: string, payload: any} ) {
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
    default:
      return state;
  }
}
