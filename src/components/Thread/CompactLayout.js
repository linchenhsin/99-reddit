// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import { CONTENT_TYPE } from '~/constants';

import IconButton from '~/components/IconButton';

import style from './index.module.scss';

type Props = {
  author: Node,
  buttons: Node,
  content: Node,
  score: Node,
  title: Node,
  contentType: $Values<typeof CONTENT_TYPE>,
}

const icons = {
  [ CONTENT_TYPE.TEXT ]: 'text',
  [ CONTENT_TYPE.IMAGE ]: 'photos',
  [ CONTENT_TYPE.VIDEO ]: 'expandoMediaVideo',
  [ CONTENT_TYPE.LINK ]: 'link',
  [ CONTENT_TYPE.OUTBOUND_LINK ]: 'outboundLink',
};

function CompactLayout( props: Props ) {
  const {
    author, buttons, content, score, title, contentType,
  } = props;
  const [ isExpanded, setExpand ] = useState( false );
  const [ isHovered, setHover ] = useState( false );

  let iconType = icons[ contentType ];
  if ( isHovered ) {
    iconType = 'expandoArrowExpand';
  }
  if ( isExpanded ) {
    iconType = 'expandoArrowCollapse';
  }

  return (
    <div className={ `${ style.compactContainer } ${ style.thread }` }>
      <div className={ style.compactTop }>
        <div className={ style.compactTopLeft }>
          <div className={ style.compactScoreWrapper }>
            <div className={ style.compactScore }>
              { score }
            </div>
          </div>
          <div
            className={ style.compactContentButtonDiv }
            onMouseEnter={ () => setHover( true ) }
            onMouseLeave={ () => setHover( false ) }
          >
            <IconButton
              type={ iconType }
              onClick={ () => setExpand( !isExpanded ) }
              buttonStyle={ style.expandBtn }
              iconStyle={ style.expandIcon }
            />
          </div>
          <div className={ style.compactTitleAuthor }>
            <div className={ style.compactTitle }>
              { title }
            </div>
            <div className={ style.compactAuthor }>
              { author }
            </div>
          </div>
        </div>
        <div className={ style.compactButtons }>
          { buttons }
        </div>
      </div>
      <div className={ `${ style.compactContent } ${ isExpanded ? style.expand : '' }` }>
        { content }
      </div>
    </div>
  );
}

export default CompactLayout;
