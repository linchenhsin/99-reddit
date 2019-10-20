// @flow
import React from 'react';

import { LAYOUT } from '~/constants';

import style from './index.module.scss';

type Props = {
  layout: $Values<typeof LAYOUT>,
  title: string,
  backgroundColor: string,
  backgroundImage: string,
  primaryColor: string,
  iconImg: string,
}

const contentWrapperStyle = {
  [ LAYOUT.CARD ]: style.card,
  [ LAYOUT.CLASSIC ]: style.classic,
  [ LAYOUT.COMPACT ]: style.compact,
};

function Header( props: Props ) {
  const {
    layout, title, backgroundImage, backgroundColor, primaryColor, iconImg,
  } = props;
  const containerStyle = {
    backgroundImage: `url(${ backgroundImage })`,
    backgroundColor,
  };
  const iconStyle = {
    backgroundImage: `url(${ iconImg })`,
    backgroundColor: primaryColor,
  };
  return (
    <div
      style={ containerStyle }
      className={ `${ style.container } ${ backgroundImage ? style.background : '' }` }
    >
      <div className={ contentWrapperStyle[ layout ] }>
        <div className={ style.content }>
          <div
            style={ iconStyle }
            className={ style.icon }
          />
          <div className={ style.title }>
            { title }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
