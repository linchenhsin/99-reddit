// @flow

import type { UserModel } from '~/types';

export const ADD_USER = 'ADD_USER';
export const addUser = ( payload: UserModel[] ) => ( {
  type: ADD_USER,
  payload,
} );
