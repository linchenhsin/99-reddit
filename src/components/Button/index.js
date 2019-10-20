// @flow
import React from 'react';
import type { Node } from 'react';
import { Button as AntdButton } from 'antd';

import style from './index.module.scss';

type Props = {
  type: string,
  onClick: Function,
  buttonStyle?: string,
  iconStyle?: string,
  children?: Node,
}

function Button( props: Props ) {
  const {
    type, onClick, buttonStyle = '', iconStyle = '', children,
  } = props;

  return (
    <AntdButton
      type="link"
      className={ `${ style.button } ${ buttonStyle }` }
      onClick={ onClick }
    >
      <i className={ `icon icon-${ type } ${ iconStyle } ${ style.icon } ${ children ? style.iconPadding : '' }` } />
      { children }
    </AntdButton>
  );
}

Button.defaultProps = {
  buttonStyle: '',
  iconStyle: '',
  children: null,
};

export default Button;
