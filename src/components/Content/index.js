// @flow
import React from 'react';


// components
import Thread from '~/components/Thread';

import { LAYOUT, VOTE } from '~/constants';

import style from './index.module.scss';

import type { ThreadModels } from '~/types';

type Props = {
  layout: $Values<typeof LAYOUT>,
  threads: {
    order: string[],
    models: ThreadModels
  },
  widgets: {
    order: string[],
    models: {}
  },
  votes: {
    [ string ]: $Values<typeof VOTE>
  },
  onUpvote: ( string ) => {},
  onDownvote: ( string ) => {},
}

function Content( props: Props ) {
  const {
    layout, threads, widgets, votes, onUpvote, onDownvote,
  } = props;
  console.log( widgets );
  return (
    <div className={ style.container }>
      {
        threads.order.map( key => (
          <Thread
            key={ key }
            layout={ layout }
            model={ threads.models[ key ] }
            vote={ votes[ key ] }
            onUpvote={ onUpvote }
            onDownvote={ onDownvote }
          />
        ) )
      }
    </div>
  );
}

export default Content;
