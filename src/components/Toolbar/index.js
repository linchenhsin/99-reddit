// @flow
import React from 'react';
import { Button } from 'antd';

import { LAYOUT, SORT } from '~/constants';

type Props = {
  sort: $Values<typeof SORT>,
  layout: $Values<typeof LAYOUT>,
  onSortChange: ( $Values<typeof SORT>, ) => void,
  onLayoutChange: ( $Values<typeof LAYOUT>, ) => void,
}

function Toolbar( props: Props ) {
  const {
    sort, layout, onSortChange, onLayoutChange,
  } = props;
  const sortButtons = Object.values( SORT ).map( i => (
    <Button
      // $FlowFixMe
      key={ i }
      // $FlowFixMe
      onClick={ () => onSortChange( i ) }
      type="button"
    >
      { i }
    </Button>
  ) );
  const layoutButtons = Object.values( LAYOUT ).map( i => (
    <Button
      // $FlowFixMe
      key={ i }
      // $FlowFixMe
      onClick={ () => onLayoutChange( i ) }
      type="button"
    >
      { i }
    </Button>
  ) );
  return (
    <>
      { sortButtons }
      { layoutButtons }
      <pre>
        { JSON.stringify( { sort, layout }, null, 2 ) }
      </pre>
    </>
  );
}


export default Toolbar;
