export type ExternalUserData = {
  name: string;
  email: string;
  photoURL: string;
};

export type InternalUserData = {
  studentNumber: number;
  faculty: string;
};

export type NewUserData = ExternalUserData & InternalUserData;
export type NewUser = UserData & UserMetaData;

export type ExtraUserData = {
  isMember: boolean;
};

export type UserData = ExternalUserData & InternalUserData & ExtraUserData;

export type UserMetaData = {
  id: string;
  creationTime: Date;
};

export type User = UserData & UserMetaData;
