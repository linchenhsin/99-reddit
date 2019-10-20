// @flow
import React from 'react';

import { LAYOUT } from '~/constants';

import style from './index.module.scss';

type Item = {
  key: string,
  title: string,
  url: string,
}

type Props = {
  layout: $Values<typeof LAYOUT>,
  items: Item[],
  defaultSelectedKey: string,
}

function Navigation( props: Props ) {
  const {
    layout, items, defaultSelectedKey,
  } = props;
  return (
    <div className={ style.container }>
      <div className={ style[ layout ] }>
        {
          items.map( item => (
            <a
              key={ item.key }
              href={ item.url }
              className={ `${ style.link } ${ item.key === defaultSelectedKey ? style.active : '' } ` }
            >
              { item.title }
            </a>
          ) )
        }
      </div>
    </div>
  );
}


export default Navigation;
