// @flow
import React from 'react';

import style from './index.module.scss';

type Props = {
  type: 'comment' | 'gild' | 'share' | 'save' | 'hide' | 'report' | 'menu',
  text: string,
}

function ThreadButton( props: Props ) {
  const {
    type, text = '',
  } = props;
  const button = (
    <button
      type="button"
      className={ style.button }
      onClick={ console.log }
    >
      <i className={ `icon icon-${ type } ${ style.icon }` } />
      { text }
    </button>
  );

  return button;
}

export default ThreadButton;
