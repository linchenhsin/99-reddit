// @flow
import React from 'react';
import { Card } from 'antd';

import { LAYOUT, VOTE } from '~/constants';

import Score from '~/components/Score';
import ThreadButtonList from '~/components/ThreadButtonList';

import style from './index.module.scss';
import type { ThreadModel } from '~/types';

type Props = {
  layout: $Values<typeof LAYOUT>,
  model: ThreadModel,
  vote: $Values<typeof VOTE>,
  onUpvote: ( string ) => {},
  onDownvote: ( string ) => {},
}

function Thread( props: Props ) {
  const {
    layout, model: {
      id, title, score, numComments,
    },
    onUpvote, onDownvote, vote,
  } = props;
  return (
    <Card className={ style.card }>
      { `${ score } ${ title }` }
      <Score
        layout={ layout }
        score={ score }
        vote={ vote }
        onUpvote={ () => onUpvote( id ) }
        onDownvote={ () => onDownvote( id ) }
      />
      <ThreadButtonList
        layout={ layout }
        numComments={ numComments }
      />
    </Card>
  );
}

export default Thread;
