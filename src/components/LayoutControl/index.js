// @flow
import React from 'react';

import { LAYOUT } from '~/constants';

import CardSvg from '~/assets/images/layout-card.svg';
import ClassicSvg from '~/assets/images/layout-classic.svg';
import CompactSvg from '~/assets/images/layout-compact.svg';

import style from './index.module.scss';

const svgs = {
  [ LAYOUT.CARD ]: CardSvg,
  [ LAYOUT.CLASSIC ]: ClassicSvg,
  [ LAYOUT.COMPACT ]: CompactSvg,
};

type Props = {
  value: $Values<typeof LAYOUT>,
  onChange: ( $Values<typeof LAYOUT>, ) => void,
}

function LayoutControl( props: Props ) {
  const {
    value, onChange,
  } = props;
  const layoutButtons = [];
  Object.values( LAYOUT ).forEach( i => {
    const key = String( i );
    const Svg = svgs[ key ];
    layoutButtons.push(
      <Svg
        key={ key }
        className={ `${ style.icon } ${ value === i ? style.active : '' }` }
        onClick={ () => onChange( key ) }
      />
    );
  } );

  return (
    <>
      <span className={ style.label }>
        view
      </span>
      { layoutButtons }
    </>
  );
}

export default LayoutControl;
