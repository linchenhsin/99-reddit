// @flow
import React from 'react';

import { LAYOUT, VOTE } from '~/constants';

import { formatNumber } from './utils';

import IconButton from '~/components/IconButton';

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
  onUpvote?: Function,
  onDownvote?: Function,
  loading: boolean,
}

function Score( props: Props ) {
  const {
    layout,
    score,
    vote,
    onUpvote = () => { },
    onDownvote = () => { },
    loading,
  } = props;

  return (
    <div className={ `${ containerStyle[ layout ] } ${ style.background }` }>
      <div className={ `${ containerStyle[ layout ] } ${ style.container }` }>
        <IconButton
          type="upvote"
          onClick={ onUpvote }
          buttonStyle={ style.upvoteBtn }
          iconStyle={ loading ? '' : upvoteIconStyle[ vote ] }
        />
        <div className={ `${ style.score } ${ scoreStyle[ vote ] }` }>
          { !loading && formatNumber( score ) }
        </div>
        <IconButton
          type="downvote"
          onClick={ onDownvote }
          buttonStyle={ style.downvoteBtn }
          iconStyle={ loading ? '' : downvoteIconStyle[ vote ] }
        />
      </div>
    </div>
  );
}

Score.defaultProps = {
  onUpvote: () => { },
  onDownvote: () => { },
};

export default Score;
