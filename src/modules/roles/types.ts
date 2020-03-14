import { Nominee } from 'modules/nominees';
import { Winner } from 'modules/winners';

export type RoleData = {
  isOpen: boolean;
  nominees: Nominee[];
  winners: Winner[];
};

export type RoleMetaData = {
  id: string;
  creationTime: Date;
};

export type Role = RoleData & RoleMetaData;
