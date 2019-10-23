// @flow
import React, { useState } from 'react';
import type { Node } from 'react';

import IconButton from '~/components/IconButton';

import style from './index.module.scss';

type Props = {
  author: Node,
  buttons: Node,
  content: Node,
  score: Node,
  title: Node,
}

function ClassicLayout( props: Props ) {
  const {
    author, buttons, content, score, title,
  } = props;

  const [ expand, setExpand ] = useState( false );
  return (
    <div className={ `${ style.classicContainer } ${ style.thread } ${ expand ? style.expand : '' }` }>
      <div className={ style.classicScore }>
        { score }
      </div>
      <div className={ style.classicRight }>
        <div className={ style.classicTopRight }>
          <div className={ style.classicTitle }>
            { title }
          </div>
          <div className={ style.classicAuthor }>
            { author }
          </div>
          <div className={ style.classicButtons }>
            <IconButton
              type={ expand ? 'expandoArrowCollapse' : 'expandoArrowExpand' }
              onClick={ () => setExpand( !expand ) }
              buttonStyle={ style.expandBtn }
              iconStyle={ style.expandIcon }
            />
            <div className={ style.classicDivider } />
            { buttons }
          </div>
        </div>
        {
          expand && (
            <div className={ style.classicContent }>
              { content }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ClassicLayout;
