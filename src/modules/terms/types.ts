export type TermData = {
  season: string;
  year: string;
  isNominationsOpen: boolean;
  isVotingOpen: boolean;
};

export type TermMetaData = {
  id: string;
  creationTime: Date;
};

export type Role = TermData & TermMetaData;
