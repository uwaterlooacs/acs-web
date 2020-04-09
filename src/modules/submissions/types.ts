type SubmissionInternalData = {
  candidate: string;
};

export type SubmissionUserData = {
  fullName: string;
  position: string;
  videoUrl: string;
  writeUp: string;
};

export type SubmissionData = SubmissionInternalData & SubmissionUserData;

type SubmissionMetadata = {
  id: string;
  createdOn: Date;
  modifiedOn: Date;
};

export type Submission = SubmissionData & SubmissionMetadata;