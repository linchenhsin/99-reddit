// @flow

export type CommunityWidget = {
  id: string,
  type: 'community',
  data: {
    communityIcon: string,
    displayNamePrefixed: string, // r/DotA2
    subscribers: number, // members online
    accountsActive: number, // num of members
    createdUtc: number, // for cake day
    publicDescription: string, // Dota
  }
}

export type AdWidget = {
  id: string,
  type: 'ad',
  data: {
    imageUrl: string,
    caption: string,
    linkUrl: string,
  }
}

export type AdWidgetModels = {
  [ id: string ]: AdWidget,
}

export type WidgetModel = CommunityWidget | AdWidget

export type WidgetModels = {
  [ id: string ]: WidgetModel,
}

export type Widgets = {
  models: WidgetModels;
  order: string[],
}
