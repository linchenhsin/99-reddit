/* eslint-disable camelcase */
// @flow

import { AxiosInstance } from 'axios';
import { subredditInstance } from './transportService';

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
      } ).then( ( response: {data: SubredditAboutData} ) => {
        const {
          data: {
            data: {
              description,
              header_img,
              icon_img,
              icon_size,
              id,
              primary_color,
              title,
              display_name_prefixed,
            },
          },
        } = response;
        const data = {
          description,
          headerImg: header_img,
          iconImg: icon_img,
          iconSize: [ icon_size[ 0 ], icon_size[ 1 ] ],
          id,
          primaryColor: primary_color,
          title,
          displayNamePrefixed: display_name_prefixed,
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
    threadModels: ThreadModels
  }> {
    return new Promise( ( resolve, reject ) => {
      this.instance( {
        method: 'GET',
        url: `${ subreddit }/${ sort }.json`,
        params,
      } ).then( ( response: {data: SubredditSearchData} ) => {
        const {
          data: {
            data: {
              after,
              before,
              children,
            },
          },
        } = response;
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
              num_comments,
              pinned,
              score,
              selftext_html,
              spoiler,
              sticked,
              subreddit_name_prefixed,
              title,
              ups,
              url,
              visited,
            },
          } = thread;
          threadModels[ id ] = {
            author,
            authorFlairRichtext: author_flair_richtext,
            createdUtc: created_utc,
            downs,
            hideScore: hide_score,
            id,
            linkFlairRichtext: link_flair_richtext,
            numComments: num_comments,
            pinned,
            score,
            selftextHtml: selftext_html,
            spoiler,
            sticked,
            subreddit,
            subredditNamePrefixed: subreddit_name_prefixed,
            title,
            ups,
            url,
            visited,
          };
        } );
        resolve( { after, before, threadModels } );
      } )
        .catch( error => {
          reject( error );
        } );
    } );
  }
}

export default new SubredditAPI();
