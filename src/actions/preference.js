// @flow

import { LAYOUT, SORT } from '~/constants';

export const SET_LAYOUT = 'SET_LAYOUT';
export const setLayout = ( payload: $Values<typeof LAYOUT> ) => ( {
  type: SET_LAYOUT,
  payload,
} );

export const SET_SORT = 'SET_SORT';
export const setSort = ( payload: $Values<typeof SORT> ) => ( {
  type: SET_SORT,
  payload,
} );
