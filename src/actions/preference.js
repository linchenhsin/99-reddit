// @flow

import { LAYOUT, SORT, MODE } from '~/constants';

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

export const SET_MODE = 'SET_MODE';
export const setMode = ( payload: $Values<typeof MODE> ) => ( {
  type: SET_MODE,
  payload,
} );
