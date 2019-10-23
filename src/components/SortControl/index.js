/* eslint-disable jsx-a11y/interactive-supports-focus */
// @flow
import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

import { SORT } from '~/constants';

import HotSvg from '~/assets/images/sort-hot.svg';
import NewSvg from '~/assets/images/sort-new.svg';
import TopSvg from '~/assets/images/sort-top.svg';

import style from './index.module.scss';

const svgs = {
  [ SORT.HOT ]: HotSvg,
  [ SORT.NEW ]: NewSvg,
  [ SORT.TOP ]: TopSvg,
};

type Props = {
  value: $Values<typeof SORT>,
  onChange: ( $Values<typeof SORT>, ) => void,
}

function SortControl( props: Props ) {
  const {
    value, onChange,
  } = props;


  const [ visible, setVisibility ] = useState( false );
  SortControl.handleClickOutside = () => setVisibility( false );

  // dropdown
  const ActiveSvg = svgs[ value ];
  const ActiveSvgDiv = (
    <div
      className={ `${ style.item } ${ style.active }` }
      role="button"
    >
      <ActiveSvg className={ `${ style.icon } ${ style.active }` } />
      { value }
    </div>
  );

  // dropdown content / options
  const sortButtons = [];
  Object.values( SORT ).forEach( i => {
    const key = String( i );
    const Svg = svgs[ key ];
    const item = (
      <div
        className={ `${ style.item } ${ value === i ? style.active : '' }` }
        key={ key }
        role="button"
        onClick={ () => { if ( key !== value ) onChange( key ); } }
        onKeyPress={ () => { if ( key !== value ) onChange( key ); } }
      >
        <Svg
          key={ key }
          className={ `${ style.icon } ${ value === i ? style.active : '' }` }
        />
        { key }
      </div>
    );
    sortButtons.push( item );
  } );

  return (
    <div
      role="button"
      onClick={ () => setVisibility( !visible ) }
      onKeyPress={ () => setVisibility( !visible ) }
      className={ style.sortDiv }
    >
      <span className={ `${ style.label } ${ style.sort }` }>
        sort
      </span>
      <div className={ style.dropdown }>
        <span>{ ActiveSvgDiv }</span>
        <div className={ `${ style.dropdownContent } ${ visible ? style.show : '' }` }>
          { sortButtons }
        </div>
      </div>
      <i className={ `icon icon-dropdownTriangle ${ style.downTriange }` } />
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SortControl.handleClickOutside,
};

export default onClickOutside( SortControl, clickOutsideConfig );
