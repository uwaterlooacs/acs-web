import { Nominee } from 'modules/nominees';

export type RoleData = {
  title: string;
  isOpen: boolean;
  winners: string[];
  nominees: Nominee[];
};

export type RoleMetaData = {
  id: string;
  creationTime: Date;
};

export type Role = RoleData & RoleMetaData;
