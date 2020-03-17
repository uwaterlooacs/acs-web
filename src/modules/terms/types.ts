import { Role } from 'modules/roles';

export type TermData = {
  season: string;
  year: number;
  isNominationsOpen: boolean;
  isVotingOpen: boolean;
  roles: Role[];
};

export type TermMetaData = {
  id: string;
  creationTime: Date;
};

export type Term = TermData & TermMetaData;
