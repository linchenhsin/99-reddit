// @flow
import React from 'react';

import { LAYOUT, CONTENT_TYPE } from '~/constants';

import style from './index.module.scss';

type Props = {
  contentType: $Values<typeof CONTENT_TYPE>,
  layout: $Values<typeof LAYOUT>,
  title: string,
  html: string,
  url: string,
}

function ThreadContent( props: Props ) {
  const {
    contentType,
    layout,
    title,
    html,
    url,
  } = props;
  let content = null;
  switch ( contentType ) {
    case CONTENT_TYPE.TEXT:
      content = (
        <div
          className={ `${ style.text } ${ layout === LAYOUT.CARD ? style.card : '' }` }
          dangerouslySetInnerHTML={ { __html: html } }
        />
      );
      break;

    case CONTENT_TYPE.IMAGE:
      content = (
        <div className={ style.imgContainer }>
          <img
            src={ url }
            alt={ title }
          />
        </div>
      );
      break;

    default:
      break;
  }
  return (
    <div className={ style.container }>
      { content }
    </div>
  );
}


export default ThreadContent;
