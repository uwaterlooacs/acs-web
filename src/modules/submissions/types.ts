type SubmissionInternalData = {
  candidate: string;
  photoUrl: string | null;
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
  createdOn: firebase.firestore.Timestamp;
  modifiedOn: firebase.firestore.Timestamp;
};

export type Submission = SubmissionData & SubmissionMetadata;
