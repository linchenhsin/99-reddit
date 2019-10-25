/* eslint-disable camelcase */
// @flow

import { AxiosInstance } from 'axios';
import { subredditInstance } from './transportService';

import { CONTENT_TYPE } from '~/constants';
import type { SubredditAbout, ThreadModels } from '~/types';
import type { SubredditAboutData, SubredditSearchParams, SubredditSearchData } from './types';

class SubredditAPI {
  instance: AxiosInstance;

  constructor() {
    this.instance = subredditInstance;
  }

  /**
   * https://www.reddit.com/dev/api#GET_r_{subreddit}_about
   */
  about( subreddit: string ): Promise<SubredditAbout> {
    return new Promise( ( resolve, reject ) => {
      this.instance( {
        method: 'GET',
        url: `${ subreddit }/about.json`,
      } ).then( ( response: { data: SubredditAboutData } ) => {
        const {
          data: {
            data: {
              description,
              header_img,
              banner_background_color,
              banner_background_image,
              icon_img,
              icon_size,
              id,
              primary_color,
              title,
              display_name_prefixed,

              community_icon,
              subscribers,
              accounts_active,
              created_utc,
              public_description,
            },
          },
        } = response;
        const data = {
          description,
          headerImg: header_img,
          bannerBackgroundColor: banner_background_color,
          bannerBackgroundImage: banner_background_image,
          iconImg: icon_img,
          iconSize: [ icon_size[ 0 ], icon_size[ 1 ] ],
          id,
          primaryColor: primary_color,
          title,
          displayNamePrefixed: display_name_prefixed,

          communityIcon: community_icon,
          subscribers,
          accountsActive: accounts_active,
          createdUtc: created_utc,
          publicDescription: public_description,
        };
        resolve( data );
      } )
        .catch( error => {
          reject( error );
        } );
    } );
  }

  /**
   * https://www.reddit.com/dev/api/#GET_hot
   * https://www.reddit.com/dev/api/#GET_new
   * https://www.reddit.com/dev/api/#GET_top
   */
  search( subreddit: string, sort: string, params?: SubredditSearchParams ): Promise<{
    after: string,
    before: string,
    hasMore: boolean,
    threadModels: ThreadModels
  }> {
    return new Promise( ( resolve, reject ) => {
      this.instance( {
        method: 'GET',
        url: `${ subreddit }/${ sort }.json`,
        params: {
          ...params,
          raw_json: 1,
        },
      } ).then( ( response: { data: SubredditSearchData } ) => {
        const {
          data: {
            data: {
              dist,
              after,
              before,
              children,
            },
          },
        } = response;
        const hasMore = dist > 0;
        const threadModels = {};
        children.forEach( thread => {
          const {
            data: {
              author,
              author_flair_richtext,
              created_utc,
              downs,
              hide_score,
              id,
              link_flair_richtext,
              media,
              num_comments,
              pinned,
              score,
              selftext_html,
              spoiler,
              stickied,
              subreddit_name_prefixed,
              title,
              ups,
              url,
              visited,
            },
          } = thread;

          let contentType;
          if ( selftext_html ) {
            contentType = CONTENT_TYPE.TEXT;
          }
          if ( ( /\.(gif|jpg|jpeg|tiff|png)$/i ).test( url ) ) {
            contentType = CONTENT_TYPE.IMAGE;
          }
          if ( media ) {
            if ( media.type || media.reddit_video ) {
              contentType = CONTENT_TYPE.VIDEO;
            } else {
              contentType = CONTENT_TYPE.LINK;
            }
          }
          if ( !contentType && url ) {
            contentType = CONTENT_TYPE.OUTBOUND_LINK;
          }
          threadModels[ id ] = {
            author,
            authorFlairRichtext: author_flair_richtext,
            createdUtc: created_utc,
            contentType,
            downs,
            hideScore: hide_score,
            id,
            linkFlairRichtext: link_flair_richtext,
            media,
            numComments: num_comments,
            pinned,
            score,
            selftextHtml: selftext_html,
            spoiler,
            stickied,
            subreddit,
            subredditNamePrefixed: subreddit_name_prefixed,
            title,
            ups,
            url,
            visited,
          };
        } );
        resolve( {
          after, before, hasMore, threadModels,
        } );
      } )
        .catch( error => {
          reject( error );
        } );
    } );
  }
}

export default new SubredditAPI();
