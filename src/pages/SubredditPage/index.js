// @flow

import React, { Component } from 'react';
import { connect, Dispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

// constants
import { SORT, LAYOUT, VOTE } from '~/constants';

// actions
import { setLayout, setSort } from '~/actions/preference';
import { upvote, downvote } from '~/actions/subreddit';

// thunk
import { fetchSubredditAbout, fetchThreads } from './thunk';

// components
import Content from '~/components/Content';
import Header from '~/components/Header';
import Navigation from '~/components/Navigation';
import Toolbar from '~/components/Toolbar';

// types
import type { SubredditAbout, ThreadModels } from '~/types';

// style
import style from './index.module.scss';

// mock data
import mockNav from '~/../__mocks__/navigation.json';

type Props = {
  dispatch: Dispatch,
  subreddit: string,
  about: SubredditAbout,
  layout: $Values<typeof LAYOUT>,
  sort: $Values<typeof SORT>,
  mode: 'Light' | 'Dark',
  navItems: {
    "key": string,
    "title": string,
    "url": string,
  }[];
  threadsModels: ThreadModels,
  threadsOrder: string[],
  threadsVotes: {
    [ string ]: $Values<typeof VOTE>,
  }
}

class SubredditPage extends Component<Props> {
  componentDidMount() {
    const {
      dispatch, subreddit, sort,
    } = this.props;
    dispatch( fetchSubredditAbout( subreddit ) );
    dispatch( fetchThreads( subreddit, sort ) );
  }

  render() {
    const {
      subreddit,
      dispatch,
      layout, sort,
      about,
      navItems,
      threadsModels, threadsOrder, threadsVotes,
      mode = 'Light',
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
          onSortChange={ s => dispatch( setSort( s ) ) }
          onLayoutChange={ l => dispatch( setLayout( l ) ) }
        />
        <Content
          layout={ layout }
          onUpvote={ tid => dispatch( upvote( tid ) ) }
          onDownvote={ tid => dispatch( downvote( tid ) ) }
          threads={
            {
              models: threadsModels,
              order: threadsOrder,
              votes: threadsVotes,
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
    layout: state.preference.layout,
    sort: state.preference.sort,
    threadsModels: state.subreddit.threadsModels,
    threadsOrder: state.subreddit.threadsOrder,
    threadsVotes: state.subreddit.threadsVotes,
    navItems: mockNav.items,
  };
}

export default connect( select )( SubredditPage );
