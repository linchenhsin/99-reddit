// @flow
import { format } from 'date-fns';

export function formatMemberNumber( x: number ): string {
  if ( x < 999 ) {
    return String( x );
  }
  if ( x < 999999 ) {
    return `${ Math.round( x / 1000 ) }k`;
  }
  if ( x < 999999999 ) {
    return `${ Math.round( x / 1000000 ) }m`;
  }
  if ( x < 999999999999 ) {
    return `${ Math.round( x / 1000000000 ) }b`;
  }
  return '1T+';
}

export function formatOnlineNumber( x: number ): string {
  if ( x < 999 ) {
    return String( x );
  }
  if ( x < 999999 ) {
    return `${ Math.round( x / 100 ) / 10 }k`;
  }
  return '1M+';
}

export function formatCakeDate( x: number ): string {
  const offset = new Date().getTimezoneOffset();
  const date = new Date( x * 1000 + offset * 60 * 1000 );
  return format( date, 'MMM dd, yyyy' );
}
