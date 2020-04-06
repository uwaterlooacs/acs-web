export type ExternalUserData = {
  name: string;
  email: string;
  photoURL: string;
};

export type InternalUserData = {
  studentNumber: number;
  faculty: string;
  waterlooEmail: string;
};

export type UserData = ExternalUserData & InternalUserData;

export type UserMetaData = {
  id: string;
  creationTime: Date;
};

export type User = UserData & UserMetaData;
