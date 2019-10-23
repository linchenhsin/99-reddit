// @flow

import { LOADING_STATUS, CONTENT_TYPE } from '~/constants';

export type SubredditAbout = {
  description: string,
  headerImg: string,
  bannerBackgroundColor: string,
  bannerBackgroundImage: string,
  iconImg: string,
  iconSize: [ number, number ],
  id: string,
  primaryColor: string,
  title: string, // e.g. Dota 2 on Reddit
  displayNamePrefixed: string,
}

type FlairRichtextEmoji = {
  a: string, // tooltip
  e: 'emoji',
  u: string, // url
}

type FlairRichtextText = {
  e: 'text',
  t: string // text
}

export type FlairRichtext = FlairRichtextEmoji | FlairRichtextText;

export type ThreadModel = {
  author: string,
  authorFlairRichtext: FlairRichtext[], // tag before author
  contentType: $Values<typeof CONTENT_TYPE>,
  createdUtc: number,
  downs: number,
  hideScore: boolean,
  id: string,
  linkFlairRichtext: FlairRichtext[], // tag after title
  media?: {
    type: string,
    reddit_video: {},
  },
  numComments: number,
  pinned: boolean,
  score: number,
  selftextHtml: string, // text content
  spoiler: boolean,
  stickied: boolean,
  subreddit: string, // e.g. "DotA2"
  subredditNamePrefixed: string, // e.g. "r/DotA2"
  title: string,
  ups: number,
  url: string, // picture url
  visited: boolean,
}

export type ThreadModels = {
  [ id: string ]: ThreadModel,
}

export type Subreddit = {
  aboutLoadingStatus: $Values<typeof LOADING_STATUS>,
  about: SubredditAbout,
  after: string,
  before: string,
  threadsOrder: string[], // array of ids
  threadsModels: ThreadModels;
  threadsVotes: {
    [ id: string ]: -1 | 0 | 1
  }
}
