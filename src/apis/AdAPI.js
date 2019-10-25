/* eslint-disable class-methods-use-this */
// @flow

import type { AdData } from './types';
import ads from '~/../__mocks__/ads.json';

class AdAPI {
  getAll(): Promise<AdData> {
    return new Promise( resolve => {
      resolve( ads );
    } );
  }
}

export default new AdAPI();
