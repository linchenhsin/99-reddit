// @flow

import axios, { AxiosInstance } from 'axios';

/**
 * Axios instance with predefined config
 * @type {AxiosInstance}
 */

const subredditInstance: AxiosInstance = axios.create( {
  baseURL: 'https://www.reddit.com/r/',
} );

const userInstance: AxiosInstance = axios.create( {
  baseURL: 'https://www.reddit.com/user/',
} );

export { subredditInstance, userInstance };
