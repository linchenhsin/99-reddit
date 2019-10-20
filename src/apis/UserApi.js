// @flow

import { AxiosInstance } from 'axios';
import { userInstance } from './transportService';

import type { UserAboutData } from './types';

class UserApi {
  instance: AxiosInstance;

  constructor() {
    this.instance = userInstance;
  }

  /**
   * https://www.reddit.com/dev/api#GET_user_{username}_about
   */
  about( username: string ): Promise<UserAboutData> {
    return this.instance( {
      method: 'GET',
      url: `${ username }/about.json`,
    } );
  }
}

export default new UserApi();
