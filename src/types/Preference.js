// @flow

import { SORT, LAYOUT } from '~/constants';

export type Preference = {
  sort: $Values<typeof SORT>,
  layout: $Values<typeof LAYOUT>,
}
