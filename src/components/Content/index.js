// @flow
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// components
import Thread from '~/components/Thread';
import Widget from '~/components/Widget';

import { LAYOUT, VOTE } from '~/constants';

import style from './index.module.scss';

import type { ThreadModels } from '~/types';

const LOADING_THREADS_NUM = {
  [ LAYOUT.CARD ]: 2,
  [ LAYOUT.CLASSIC ]: 10,
  [ LAYOUT.COMPACT ]: 20,
};

type Props = {
  layout: $Values<typeof LAYOUT>,
  threads: {
    order: string[],
    models: ThreadModels,
    fetching: boolean,
    hasMore: boolean,
  },
  widgets: {
    order: string[],
    models: {}
  },
  votes: {
    [ string ]: $Values<typeof VOTE>
  },
  loadMore: ( number ) => {},
  onUpvote: ( string ) => {},
  onDownvote: ( string ) => {},
}

function Content( props: Props ) {
  const {
    layout, threads, threads: { fetching, hasMore }, widgets, votes, onUpvote, onDownvote,
    loadMore,
  } = props;

  return (
    <div className={ style.container }>
      <div className={ `${ style.threads } ${ style[ layout ] }` }>
        <InfiniteScroll
          pageStart={ 0 }
          loadMore={ loadMore }
          hasMore={ !fetching && hasMore }
        >
          {
            threads.order.map( key => (
              <Thread
                key={ `thread-${ key }` }
                layout={ layout }
                model={ threads.models[ key ] }
                vote={ votes[ key ] }
                onUpvote={ onUpvote }
                onDownvote={ onDownvote }
              />
            ) )
          }
        </InfiniteScroll>
        {
          hasMore && (
            <div className={ `${ style.loaderContainer } ${ style[ layout ] }` }>
              {
                Array.from( Array( LOADING_THREADS_NUM[ layout ] ).keys() ).map( i => (
                  <Thread
                    key={ `thread-loading-${ i }` }
                    loading
                    layout={ layout }
                  />
                ) )
              }
            </div>
          )
        }
      </div>
      <div className={ style.widgets }>
        {
          widgets.order.map( key => (
            <Widget
              key={ `widget-${ key }` }
              model={ widgets.models[ key ] }
            />
          ) )
        }
      </div>
    </div>
  );
}

export default Content;
