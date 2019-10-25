// @flow

import React from 'react';

import { WIDGET_TYPE } from '~/constants';

import AdWidget from './AdWidget';
import CommunityWidget from './CommunityWidget';

import style from './index.module.scss';

import type { WidgetModel } from '~/types';

const widgets = {
  [ WIDGET_TYPE.AD ]: AdWidget,
  [ WIDGET_TYPE.COMMUNITY ]: CommunityWidget,
};

type Props = {
  model: WidgetModel
}
function Widget( props: Props ) {
  const {
    model,
    model: { type },
  } = props;
  const WidgetComponent = widgets[ type ];
  // $FlowFixMe
  const widget = <WidgetComponent model={ model } />;
  return (
    <div className={ style.container }>
      { widget }
    </div>
  );
}

export default Widget;
