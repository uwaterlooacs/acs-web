export type RoleData = {
  isOpen: boolean;
  nominees: string[];
  winners: string[];
};

export type RoleMetaData = {
  id: string;
  creationTime: Date;
};

export type Role = RoleData & RoleMetaData;
