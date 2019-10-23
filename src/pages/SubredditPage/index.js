// @flow

import React, { Component } from 'react';
import { connect, Dispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

// constants
import {
  SORT, LAYOUT, VOTE, MODE,
} from '~/constants';

// actions
import { setLayout, setMode } from '~/actions/preference';
import { vote } from '~/actions/subreddit';

// thunk
import { fetchSubredditAbout, fetchThreads, fetchThreadsOnSortChange } from './thunk';

// components
import Content from '~/components/Content';
import Header from '~/components/Header';
import Navigation from '~/components/Navigation';
import Toolbar from '~/components/Toolbar';

// config
import config from '~/config';

// mock data
import mockNav from '~/../__mocks__/navigation.json';

// types
import type { SubredditAbout, ThreadModels } from '~/types';

// style
import style from './index.module.scss';

type Props = {
  dispatch: Dispatch,
  subreddit: string,
  after: string,
  about: SubredditAbout,
  layout: $Values<typeof LAYOUT>,
  sort: $Values<typeof SORT>,
  mode: $Values<typeof MODE>,
  navItems: {
    "key": string,
    "title": string,
    "url": string,
  }[];
  threadsModels: ThreadModels,
  threadsOrder: string[],
  threadsVotes: {
    [ string ]: $Values<typeof VOTE>,
  },
  hasMoreThreads: boolean,
  isFetchingSortThreads: boolean,
  isFetchingMoreThreads: boolean,
}

class SubredditPage extends Component<Props> {
  componentDidMount() {
    const {
      dispatch, subreddit, sort,
    } = this.props;
    dispatch( fetchSubredditAbout( subreddit ) );
    dispatch( fetchThreads( subreddit, sort, { limit: config.thread_limit } ) );
  }

  render() {
    const {
      subreddit,
      dispatch,
      layout, sort,
      after,
      about,
      navItems,
      threadsModels, threadsOrder, threadsVotes,
      hasMoreThreads,
      isFetchingSortThreads,
      isFetchingMoreThreads,
      mode,
    } = this.props;
    return (
      <div className={ `SubredditVars${ mode }${ subreddit } ${ style.pageBody }` }>
        <Helmet>
          <title>{ about.title }</title>
        </Helmet>
        <Header
          layout={ layout }
          title={ about.displayNamePrefixed }
          backgroundColor={ about.bannerBackgroundColor }
          backgroundImage={ about.bannerBackgroundImage }
          primaryColor={ about.primaryColor }
          iconImg={ about.iconImg }
        />
        <Navigation
          layout={ layout }
          defaultSelectedKey="posts"
          items={ navItems }
        />
        <Toolbar
          sort={ sort }
          layout={ layout }
          mode={ mode }
          onSortChange={ s => dispatch( fetchThreadsOnSortChange(
            subreddit, s, { limit: config.thread_limit }
          ) ) }
          onLayoutChange={ l => dispatch( setLayout( l ) ) }
          onModeChange={ m => dispatch( setMode( m ) ) }
        />
        <Content
          layout={ layout }
          onUpvote={ tid => dispatch( vote( { threadId: tid, vote: VOTE.UPVOTE } ) ) }
          onDownvote={ tid => dispatch( vote( { threadId: tid, vote: VOTE.DOWNVOTE } ) ) }
          loadMore={ () => dispatch( fetchThreads(
            subreddit, sort, { limit: config.thread_limit, after }
          ) ) }
          threads={
            {
              models: threadsModels,
              order: threadsOrder,
              votes: threadsVotes,
              fetching: isFetchingMoreThreads || isFetchingSortThreads,
              hasMore: hasMoreThreads,
            }
          }
          widgets={
            {
              models: {},
              order: [],
            }
          }
          votes={ threadsVotes }
        />
      </div>
    );
  }
}

function select( state ) {
  return {
    about: state.subreddit.about,
    after: state.subreddit.after,
    hasMoreThreads: state.subreddit.hasMoreThreads,
    isFetchingSortThreads: state.subreddit.isFetchingSortThreads,
    isFetchingMoreThreads: state.subreddit.isFetchingMoreThreads,
    layout: state.preference.layout,
    mode: state.preference.mode,
    navItems: mockNav.items,
    sort: state.preference.sort,
    threadsModels: state.subreddit.threadsModels,
    threadsOrder: state.subreddit.threadsOrder,
    threadsVotes: state.subreddit.threadsVotes,
  };
}

export default connect( select )( SubredditPage );
