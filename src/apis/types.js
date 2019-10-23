// @flow

/**
 * types for apis only
 */

/**
 * Subreddit API
 */
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

type Thread = {
  kind: string,
  data: {
    author: string,
    author_flair_richtext: FlairRichtext[], // tag before author
    created_utc: number,
    downs: number,
    hide_score: boolean,
    id: string,
    link_flair_richtext: FlairRichtext[], // tag after title
    media?: {
      type: string,
      reddit_video: {},
    },
    num_comments: number,
    pinned: boolean,
    score: number,
    selftext_html: string, // content
    spoiler: boolean,
    stickied: boolean, // TODO: whats this? ads?
    subreddit: string, // e.g. "DotA2"
    subreddit_name_prefixed: string, // e.g. "r/DotA2"
    title: string,
    ups: number,
    url: string,
    visited: boolean,
  }
}

// search
export type SubredditSearchParams = {
  after?: string,
  t?: 'hour' | ' day' | ' week' | ' month' | ' year' | ' all'
}

export type SubredditSearchData = {
  kind: 'Listing',
  data: {
    after: string,
    before: string,
    dist: number,
    children: Thread[]
  }
}

// about
export type SubredditAboutData = {
  kind: 't5',
  data: {
    description: string,
    header_img: string,
    banner_background_color: string,
    banner_background_image: string,
    icon_img: string,
    icon_size: [ number, number ],
    id: string,
    primary_color: string,
    title: string, // e.g. Dota 2 on Reddit
    display_name_prefixed: string, // e.g. "r/DotA2"
  }
}

/**
 * User API
 */

// about
export type UserAboutData = {
  kind: 't2',
  data: {
    comment_karma: number,
    created_utc: number,
    id: string,
    link_karma: number,
    name: string, // e.g. username
    subreddit: {
      display_name_prefixed: string, // e.g. u/username
      icon_img: string,
      icon_size: [ number, number ],
    },
  }
}
