// @flow

import { LOADING_STATUS } from '~/constants';

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

type FlairRichtext = FlairRichtextEmoji | FlairRichtextText

export type ThreadModel = {
  author: string,
  authorFlairRichtext: FlairRichtext[], // tag before author
  createdUtc: string,
  downs: number,
  hideScore: boolean,
  id: string,
  linkFlairRichtext: FlairRichtext[], // tag after title
  numComments: number,
  pinned: boolean,
  score: number,
  selftextHtml: string, // content
  spoiler: boolean,
  sticked: boolean,
  subreddit: string, // e.g. "DotA2"
  subredditNamePrefixed: string, // e.g. "r/DotA2"
  title: string,
  ups: number,
  url: string,
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
