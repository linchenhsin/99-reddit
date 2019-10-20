// @flow
import React from 'react';

import { LAYOUT } from '~/constants';

type Props = {
  layout: $Values<typeof LAYOUT>,
  headerImg: string,
  iconImg: string,
  iconSize: [number, number],
}

function Header( props: Props ) {
  const {
    layout, headerImg, iconImg, iconSize,
  } = props;
  return (
    <pre>
      {JSON.stringify( {
        layout, headerImg, iconImg, iconSize,
      }, null, 2 )}
    </pre>
  );
}

export default Header;
