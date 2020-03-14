export type ExternalUserData = {
  name: string;
  email: string;
};

export type InternalUserData = {
  studentNumber: string;
  faculty: string;
  isMember: boolean;
};

export type UserData = ExternalUserData & InternalUserData;

export type UserMetaData = {
  id: string;
  creationTime: Date;
};

export type User = UserData & UserMetaData;
