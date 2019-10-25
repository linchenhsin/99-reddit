// @flow
import React from 'react';

import { formatMemberNumber, formatOnlineNumber, formatCakeDate } from './utils';

import style from './index.module.scss';

import CakeSvg from '~/assets/images/cake.svg';

import type { CommunityWidget as CommunityWidgetType } from '~/types';

type Props = {
  model: CommunityWidgetType
}
function CommunityWidget( props: Props ) {
  const {
    model: {
      data: {
        communityIcon,
        subscribers,
        accountsActive,
        displayNamePrefixed,
        createdUtc,
        publicDescription,
      },
    },
  } = props;

  return (
    <div className={ style.community }>
      <div className={ style.header }>
        <h2>Community Details</h2>
      </div>
      <div className={ style.content }>
        <div className={ style.iconName }>
          <img
            className={ style.icon }
            src={ communityIcon }
            alt={ displayNamePrefixed }
          />
          <span className={ style.name }>
            { displayNamePrefixed }
          </span>
        </div>
        <div className={ style.statsInfo }>

          <div className={ `${ style.info } ${ style.member }` }>
            <div className={ style.number }>
              { formatMemberNumber( subscribers ) }
            </div>
            <div className={ style.text }>
              Members
            </div>
          </div>
          <div className={ style.divider } />
          <div className={ `${ style.info } ${ style.online }` }>
            <div className={ style.number }>
              { formatOnlineNumber( accountsActive ) }
            </div>
            <div className={ style.text }>
              Online
            </div>
          </div>
          <div className={ style.divider } />
          <div className={ `${ style.info } ${ style.cakeDate }` }>
            <div className={ style.number }>
              { formatCakeDate( createdUtc ) }
            </div>
            <div className={ style.text }>
              <CakeSvg className={ style.cake } />
              { ' ' }
              Cake Day
            </div>
          </div>
        </div>
        <div className={ style.description }>
          { publicDescription }
        </div>
        <button
          className={ style.button }
          type="button"
        >
          Join
        </button>
        <button
          className={ style.button }
          type="button"
        >
          Create Post
        </button>
      </div>

    </div>
  );
}

export default CommunityWidget;
