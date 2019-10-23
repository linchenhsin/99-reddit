// @flow
import React from 'react';

import type { Node } from 'react';

import style from './index.module.scss';

type Props = {
  loading?: boolean,
  height?: number | string,
  width?: number | string,
  children?: Node,
}

function Skeleton( props: Props ) {
  const {
    loading,
    height,
    width,
    children = null,
  } = props;
  if ( loading ) {
    return (
      <div
        className={ style.container }
        style={ { height, width } }
      />
    );
  }
  return children;
}

export default Skeleton;
