// @flow
import React from 'react';
import { formatDistanceStrict } from 'date-fns';

import FlairRichtext from '~/components/FlairRichtext';

import style from './index.module.scss';
import type { FlairRichtext as FlairRichtextType } from '~/types';

type Props = {
  author: string,
  authorFlairRichtext: FlairRichtextType[], // tag before author
  createdUtc: number,
  stickied: boolean,
}

function AuthorTime( props: Props ) {
  const {
    author, authorFlairRichtext, createdUtc, stickied,
  } = props;
  const date = new Date( createdUtc * 1000 );

  return (
    <div className={ style.container }>
      Posted by
      <FlairRichtext flairRichtext={ authorFlairRichtext } />
      <span className={ style.username }>
        { 'u\\' }
        { author }
      </span>
      { ' ' }
      <span
        className={ `${ style.timeDiff } ${ style.tooltip }` }
        data-date={ date.toString() }
      >
        { formatDistanceStrict( date, new Date(), { addSuffix: true } ) }
      </span>
      {
        stickied
        && (
          <span
            className={ `${ style.stickied } ${ style.tooltip }` }
            data-date="Stickied post"
          >
            <i className="icon icon-sticky" />
          </span>
        )
      }
    </div>
  );
}


export default AuthorTime;
