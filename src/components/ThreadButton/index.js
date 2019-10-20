// @flow
import React from 'react';
// import { Button } from 'antd';

import Button from '~/components/Button';

// import style from './index.module.scss';

type Props = {
  type: 'comment' | 'gild' | 'share' | 'save' | 'hide' | 'report' | 'menu',
  text: string,
}

function ThreadButton( props: Props ) {
  const {
    type, text = '',
  } = props;
  const button = (
    <Button
      type={ type }
      onClick={ () => console.log( type ) }
    >
      { text }
    </Button>
  );

  return button;
}

export default ThreadButton;
