// @flow
import React, { useState, useEffect } from 'react';

import SortControl from '~/components/SortControl';
import LayoutControl from '~/components/LayoutControl';
import NightModeButton from '~/components/NightModeButton';

import { LAYOUT, SORT, MODE } from '~/constants';

import style from './index.module.scss';

const innerStyle = {
  [ LAYOUT.CARD ]: style.card,
  [ LAYOUT.CLASSIC ]: style.classic,
  [ LAYOUT.COMPACT ]: style.compact,
};

type Props = {
  sort: $Values<typeof SORT>,
  layout: $Values<typeof LAYOUT>,
  mode: $Values<typeof MODE>,
  onSortChange: ( $Values<typeof SORT>, ) => void,
  onLayoutChange: ( $Values<typeof LAYOUT>, ) => void,
  onModeChange: ( $Values<typeof MODE>, ) => void,
}

function Toolbar( props: Props ) {
  const {
    sort, layout, mode, onSortChange, onLayoutChange, onModeChange,
  } = props;

  const [ newLayout, setLayout ] = useState( innerStyle[ layout ] );
  const [ isHovered, setHover ] = useState( false );
  const [ waitForMouseLeave, setWait ] = useState( false );

  useEffect( () => {
    setWait( true );
  }, [ layout ] );

  useEffect( () => {
    if ( !isHovered && waitForMouseLeave ) {
      setLayout( innerStyle[ layout ] );
    }
  }, [ isHovered ] );

  return (
    <div
      className={ style.container }
      onMouseEnter={ () => setHover( true ) }
      onMouseLeave={ () => setHover( false ) }
    >
      <div className={ `${ style.innerContainer } ${ newLayout }` }>
        <LayoutControl
          value={ layout }
          onChange={ onLayoutChange }
        />
        <div className={ style.divider } />
        <SortControl
          value={ sort }
          onChange={ onSortChange }
        />
        <div className={ style.divider } />
        <NightModeButton
          mode={ mode }
          onChange={ onModeChange }
        />
      </div>
    </div>
  );
}

export default Toolbar;
