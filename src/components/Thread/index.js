// @flow
import React from 'react';

import { LAYOUT, VOTE } from '~/constants';

import AuthorTime from '~/components/AuthorTime';
import CardLayout from './CardLayout';
import ClassicLayout from './ClassicLayout';
import CompactLayout from './CompactLayout';
import Score from '~/components/Score';
import Skeleton from '~/components/Skeleton';
import ThreadButtonList from '~/components/ThreadButtonList';
import ThreadContent from '~/components/ThreadContent';
import Title from '~/components/Title';

import type { ThreadModel } from '~/types';

const layouts = {
  [ LAYOUT.CARD ]: CardLayout,
  [ LAYOUT.CLASSIC ]: ClassicLayout,
  [ LAYOUT.COMPACT ]: CompactLayout,
};

type Props = {
  layout?: $Values<typeof LAYOUT>,
  model?: ThreadModel,
  vote?: $Values<typeof VOTE>,
  loading?: boolean,
  onUpvote?: Function,
  onDownvote?: Function,
}

function Thread( props: Props ) {
  const {
    layout = LAYOUT.CARD,
    model: {
      id, score, numComments, hideScore,
      author, authorFlairRichtext, createdUtc, stickied,
      title, linkFlairRichtext,
      contentType, selftextHtml, url,
    } = {},
    onUpvote = str => { console.log( str ); },
    onDownvote = str => { console.log( str ); },
    vote = VOTE.UNVOTE,
    loading = false,
  } = props;
  const Layout = layouts[ layout ];
  return (
    <Layout
      contentType={ contentType }
      author={ (
        <Skeleton
          loading={ loading }
          height={ 12 }
          width={ 200 }
        >
          <AuthorTime
            author={ author }
            authorFlairRichtext={ authorFlairRichtext }
            createdUtc={ createdUtc }
            stickied={ stickied }
          />
        </Skeleton>
      ) }

      buttons={ (
        <Skeleton
          loading={ loading }
          height={ 30 }
        >
          <ThreadButtonList
            layout={ layout }
            numComments={ numComments }
          />
        </Skeleton>
      ) }

      content={ (
        <Skeleton
          loading={ loading }
          height={ 100 }
        >
          <ThreadContent
            contentType={ contentType }
            layout={ layout }
            title={ title }
            html={ selftextHtml }
            url={ url }
          />
        </Skeleton>
      ) }

      score={ (
        <Score
          layout={ layout }
          score={ score }
          vote={ vote }
          hide={ hideScore }
          loading={ loading }
          onUpvote={ () => onUpvote( id ) }
          onDownvote={ () => onDownvote( id ) }
        />
      ) }

      title={ (
        <Skeleton
          loading={ loading }
          height={ 20 }
          width="90%"
        >
          <Title
            title={ title }
            linkFlairRichtext={ linkFlairRichtext }
          />
        </Skeleton>
      ) }

    />
  );
}

Thread.defaultProps = {
  layout: LAYOUT.CARD,
  model: {},
  vote: VOTE.UNVOTE,
  loading: false,
  onUpvote: () => { },
  onDownvote: () => { },
};

export default Thread;
