// @flow

export type UserModel = {
  commentKarma: number,
  createdUtc: number,
  id: string,
  linkKarma: number,
  name: string, // e.g. username
  displayNamePrefixed: string, // e.g. u/username
  iconImg: string,
  iconSize: [ number, number ],
}

export type Users = {
  models: {
    [ id: string ]: UserModel,
  };
}
