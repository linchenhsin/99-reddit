// @flow
import React from 'react';

import { LAYOUT } from '~/constants';

type Item = {
  key: string,
  title: string,
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
    <pre>
      {JSON.stringify( {
        layout, items, defaultSelectedKey,
      }, null, 2 )}
    </pre>
  );
}


export default Navigation;
