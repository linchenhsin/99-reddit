// @flow
import React from 'react';
import type { Node } from 'react';

import style from './index.module.scss';

type Props = {
  author: Node,
  buttons: Node,
  content: Node,
  score: Node,
  title: Node,
}

function CardLayout( props: Props ) {
  const {
    author, buttons, content, score, title,
  } = props;
  return (
    <div className={ `${ style.cardContainer } ${ style.thread }` }>
      <div className={ style.cardScore }>
        { score }
      </div>
      <div className={ style.cardRight }>
        <div className={ style.cardTopRight }>
          <div className={ style.cardAuthor }>
            { author }
          </div>
          <div className={ style.cardTitle }>
            { title }
          </div>
          <div className={ style.cardContent }>
            { content }
          </div>
        </div>
        <div className={ style.cardButtons }>
          { buttons }
        </div>
      </div>
    </div>
  );
}

export default CardLayout;
