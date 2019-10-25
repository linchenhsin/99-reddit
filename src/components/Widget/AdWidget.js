// @flow
import React from 'react';

import style from './index.module.scss';

import type { AdWidget as AdWidgetType } from '~/types';

type Props = {
  model: AdWidgetType
}
function AdWidget( props: Props ) {
  const {
    model: {
      data: {
        imageUrl,
        linkUrl,
        caption,
      },
    },
  } = props;

  return (
    <div className={ style.ad }>
      <div className={ style.header }>
        Advertisement
      </div>
      <div className={ style.content }>
        <a
          href={ linkUrl }
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={ style.adSpan }>AD</span>
          <img
            className={ style.image }
            src={ imageUrl }
            alt="advertisement"
          />
          <span className={ style.caption }>
            { caption }
          </span>
        </a>
      </div>
    </div>
  );
}


export default AdWidget;
