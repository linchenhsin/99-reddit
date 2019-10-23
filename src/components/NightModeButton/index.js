// @flow
import React from 'react';

import { MODE } from '~/constants';

import NightModeSvg from '~/assets/images/night-mode.svg';


import style from './index.module.scss';

const modeStyle = {
  [ MODE.LIGHT ]: style.light,
  [ MODE.DARK ]: style.dark,
};

type Props = {
  mode: $Values<typeof MODE>,
  onChange: ( $Values<typeof MODE>, ) => void,
}

function NightModeButton( props: Props ) {
  const {
    mode, onChange,
  } = props;

  return (
    <button
      type="button"
      className={ style.container }
      onClick={ () => { onChange( mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT ); } }
    >
      <span>
        <NightModeSvg className={ style.icon } />
      </span>
      <span className={ style.text }>
        Night Mode
      </span>
      <span>
        <button
          aria-checked="false"
          className={ `${ style.switch } ${ modeStyle[ mode ] }` }
          role="switch"
          type="button"
        >
          <div className={ style.circle } />
        </button>
      </span>
    </button>
  );
}
export default NightModeButton;
