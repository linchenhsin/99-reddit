// @flow
import React from 'react';
import moment from 'moment';

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
  const momentTime = moment.unix( createdUtc );
  const date = new Date( momentTime );

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
        { momentTime.fromNow() }
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
