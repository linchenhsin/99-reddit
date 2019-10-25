// @flow

import {
  ADD_COMMUNITY_WIDGET,
  ADD_AD_WIDGETS,
} from '~/actions/widgets';

import type { Widgets } from '~/types';

const initialState = {
  models: {},
  order: [],
};

export default function ( state: Widgets = initialState, action: { type: string, payload: any } ) {
  switch ( action.type ) {
    case ADD_COMMUNITY_WIDGET: {
      const {
        payload: widget,
      } = action;

      return {
        ...state,
        models: {
          ...state.models,
          [ widget.id ]: widget,
        },
        order: [ widget.id, ...state.order ],
      };
    }
    case ADD_AD_WIDGETS: {
      const {
        payload: ads,
      } = action;
      const order = Object.keys( ads );

      return {
        ...state,
        models: {
          ...state.models,
          ...ads,
        },
        order: [ ...state.order, ...order ],
      };
    }
    default:
      return state;
  }
}
