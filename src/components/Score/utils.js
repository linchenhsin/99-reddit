// @flow

// eslint-disable-next-line import/prefer-default-export
export function formatNumber( x: number ): string {
  if ( x < 999 ) {
    return String( x );
  }
  if ( x < 999999 ) {
    return `${ Math.round( x / 100 ) / 10 }k`;
  }
  return '1M+';
}
