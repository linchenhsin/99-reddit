// @flow

import type { CommunityWidget, AdWidgetModels } from '~/types';

export const ADD_COMMUNITY_WIDGET = 'ADD_COMMUNITY_WIDGET';
export const addCommunityWidget = ( payload: CommunityWidget ) => ( {
  type: ADD_COMMUNITY_WIDGET,
  payload,
} );

export const ADD_AD_WIDGETS = 'ADD_AD_WIDGETS';
export const addAdWidgets = ( payload: AdWidgetModels ) => ( {
  type: ADD_AD_WIDGETS,
  payload,
} );
