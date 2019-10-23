// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import store from '~/store';
import config from '~/config';
import SubredditPage from '~/pages/SubredditPage';

import '~/assets/styles/app.css';

function App() {
  return (
    <Provider store={ store }>
      <SubredditPage subreddit={ config.subreddit } />
    </Provider>
  );
}

export default hot( App );

console.log( `
                  ,d"=≥,.,qOp,
                 ,7'  ''²$(  )
                ,7'      '?q$7'
             ..,$$,.
   ,.  .,,--***²""²***--,,.  .,
 ²   ,p²''              ''²q,   ²
:  ,7'                      '7,  :
 ' $      ,db,      ,db,      $ '
  '$      ²$$²      ²$$²      $'             Looking for error message?
  '$                          $'
   '$.     .,        ,.     .$'                   Report bug here:
    'b,     '²«»«»«»²'     ,d'        https://github.com/linchenhsin/99-reddit
     '²?bn,,          ,,nd?²'
       ,7$ ''²²²²²²²²'' $7,
     ,² ²$              $² ²,
     $  :$              $:  $
     $   $              $   $
     'b  q:            :p  d'
      '²«?$.          .$?»²'
         'b            d'
       ,²²'?,.      .,?'²²,
      ²==--≥²²==--==²²≤--==²` );
