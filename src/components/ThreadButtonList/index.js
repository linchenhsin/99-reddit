// @flow
import React from 'react';

import { LAYOUT } from '~/constants';

import ThreadButton from '~/components/ThreadButton';

type Props = {
  layout: $Values<typeof LAYOUT>,
  numComments: number,
}

function getItems( layout: $Values<typeof LAYOUT>, numComments: number ) {
  switch ( layout ) {
    case LAYOUT.CARD:
      return [
        {
          type: 'comment',
          text: `${ numComments } Comments`,
        },
        {
          type: 'gild',
          text: 'Give Award',
        },
        {
          type: 'share',
          text: 'Share',
        },
        {
          type: 'save',
          text: 'Save',
        },
        {
          type: 'menu',
          text: '',
          children: [
            {
              type: 'hide',
              text: 'Hide',
            },
            {
              type: 'report',
              text: 'Report',
            },
          ],
        },
      ];

    case LAYOUT.CLASSIC:
      return [
        {
          type: 'comment',
          text: `${ numComments } Comments`,
        },
        {
          type: 'gild',
          text: 'Give Award',
        },
        {
          type: 'share',
          text: 'Share',
        },
        {
          type: 'save',
          text: 'Save',
        },
        {
          type: 'hide',
          text: 'Hide',
        },
        {
          type: 'report',
          text: 'Report',
        },
      ];

    case LAYOUT.COMPACT:
      return [
        {
          type: 'comment',
          text: `${ numComments }`,
        },
        {
          type: 'menu',
          text: '',
          children: [
            {
              type: 'gild',
              text: 'Give Award',
            },
            {
              type: 'share',
              text: 'Share',
            },
            {
              type: 'save',
              text: 'Save',
            },
            {
              type: 'hide',
              text: 'Hide',
            },
            {
              type: 'report',
              text: 'Report',
            },
          ],
        },
      ];

    default:
      return [];
  }
}

function ThreadButtonList( props: Props ) {
  const {
    layout, numComments,
  } = props;

  const items = getItems( layout, numComments );

  return (
    <div>
      { items.map( item => (
        <ThreadButton
          key={ item.type }
          type={ item.type }
          text={ item.text }
        />
      ) ) }
    </div>
  );
}


export default ThreadButtonList;
