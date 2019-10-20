// @flow
import React from 'react';

import { LAYOUT, VOTE } from '~/constants';

import { formatNumber } from './utils';

import Button from '~/components/Button';

import style from './index.module.scss';

const containerStyle = {
  [ LAYOUT.CARD ]: style.card,
  [ LAYOUT.CLASSIC ]: style.classic,
  [ LAYOUT.COMPACT ]: style.compact,
};

const upvoteIconStyle = {
  [ VOTE.UPVOTE ]: style.upvote,
};

const scoreStyle = {
  [ VOTE.UPVOTE ]: style.upvote,
  [ VOTE.DOWNVOTE ]: style.downvote,
};

const downvoteIconStyle = {
  [ VOTE.DOWNVOTE ]: style.downvote,
};

type Props = {
  layout: $Values<typeof LAYOUT>,
  score: number,
  vote: $Values<typeof VOTE>,
  onUpvote: () => {},
  onDownvote: () => {},
}

function Score( props: Props ) {
  const {
    layout, score, vote, onUpvote, onDownvote,
  } = props;

  return (
    <div className={ style.background }>
      <div className={ `${ containerStyle[ layout ] } ${ style.container }` }>
        <Button
          type="upvote"
          onClick={ onUpvote }
          buttonStyle={ style.voteBtn }
          iconStyle={ upvoteIconStyle[ vote ] }
        />
        <div className={ `${ style.score } ${ scoreStyle[ vote ] }` }>
          { formatNumber( score ) }
        </div>
        <Button
          type="downvote"
          onClick={ onDownvote }
          buttonStyle={ style.voteBtn }
          iconStyle={ downvoteIconStyle[ vote ] }
        />
      </div>
    </div>
  );
}

export default Score;
