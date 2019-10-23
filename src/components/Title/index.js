// @flow
import React from 'react';

import FlairRichtext from '~/components/FlairRichtext';

import style from './index.module.scss';
import type { FlairRichtext as FlairRichtextType } from '~/types';

type Props = {
  title: string,
  linkFlairRichtext: FlairRichtextType[],
}

function Title( props: Props ) {
  const {
    title, linkFlairRichtext,
  } = props;

  return (
    <div className={ style.container }>
      <div className={ style.title }>
        { title }
        { ' ' }
        <FlairRichtext
          flairRichtext={ linkFlairRichtext }
          verticalAlign="middle"
        />
      </div>
    </div>
  );
}


export default Title;
