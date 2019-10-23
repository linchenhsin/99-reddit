// @flow
import React from 'react';

import style from './index.module.scss';
import type { FlairRichtext as FlairRichtextType } from '~/types';

type Props = {
  flairRichtext: FlairRichtextType[], // tag before author
  verticalAlign?: Object,
}

function FlairRichtext( props: Props ) {
  const {
    flairRichtext, verticalAlign,
  } = props;

  if ( !flairRichtext.length ) {
    return null;
  }

  const results = [];
  flairRichtext.forEach( i => {
    const {
      // $FlowFixMe
      a, e, t, u,
    } = i;

    if ( e === 'text' ) {
      results.push( t );
    } else if ( e === 'emoji' ) {
      results.push( <div
        key={ a }
        title={ a }
        style={ { backgroundImage: `url(${ u })` } }
        className={ style.emoji }
      /> );
    }
  } );

  return (
    <div
      className={ style.container }
      style={ { verticalAlign } }
    >
      { results }
    </div>
  );
}

FlairRichtext.defaultProps = {
  verticalAlign: {},
};

export default FlairRichtext;
