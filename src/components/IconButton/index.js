// @flow
import React from 'react';

import style from './index.module.scss';

type Props = {
  type: string,
  onClick: Function,
  buttonStyle?: string,
  iconStyle?: string,
}

function IconButton( props: Props ) {
  const {
    type, onClick, buttonStyle = '', iconStyle = '',
  } = props;

  return (
    <button
      type="button"
      className={ `${ style.button } ${ buttonStyle }` }
      onClick={ onClick }
    >
      <i className={ `icon icon-${ type } ${ iconStyle } ${ style.icon } ` } />
    </button>
  );
}

IconButton.defaultProps = {
  buttonStyle: '',
  iconStyle: '',
};

export default IconButton;
