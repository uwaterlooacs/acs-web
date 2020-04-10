import { SubmissionData } from './types';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import getCurrentTimestamp from 'utils/getCurrentTimestamp';
import { SubmissionUserData, Submission } from './types';
import { useUser } from 'modules/users';

const SUBMISSIONS_COLLECTION = 'submissions';

const useSubmissions = () => {
  const firestore = useFirestore();

  const { firebaseUser, isSignUpComplete } = useUser();

  const submissionsRef = firestore.collection(SUBMISSIONS_COLLECTION);
  const submissions = useFirestoreCollectionData<Submission>(submissionsRef, {
    idField: 'id',
  });

  const addSubmission = async (submissionUserData: SubmissionUserData) => {
    if (!isSignUpComplete || !firebaseUser) {
      throw new Error(
        'Cannot add a submission for a user that has not completely.',
      );
    }

    const submissionData: SubmissionData = {
      ...submissionUserData,
      candidate: firebaseUser.uid,
      photoUrl: firebaseUser.photoURL,
    };
    return await submissionsRef.add({
      ...submissionData,
      ...getCurrentTimestamp(),
    });
  };

  const setSubmission = async (
    submissionId: string,
    submissionUserData: Partial<SubmissionUserData>,
  ) => {
    const submission = submissions.find(
      submission => submission.id === submissionId,
    );
    if (!submission) {
      throw new Error('Trying to set submission that does not exist.');
    }
    const submissionRef = submissionsRef.doc(submissionId);
    await submissionRef.set({ ...submission, ...submissionUserData });
  };

  const findSubmission = (candidate: string, position: string) => {
    return submissions.find(
      submission =>
        submission.candidate === candidate && submission.position === position,
    );
  };

  const deleteSubmission = async (submissionId: string) => {
    const submissionRef = submissionsRef.doc(submissionId);
    await submissionRef.delete();
  };

  const getPositionsSubmittedFor = (candidate: string) => {
    const candidateSubmissions = submissions.filter(
      submission => submission.candidate === candidate,
    );
    return candidateSubmissions.reduce<Record<string, boolean>>(
      (positionsSubmittedFor, submission) => ({
        ...positionsSubmittedFor,
        [submission.position]: true,
      }),
      {},
    );
  };

  return {
    submissions,
    addSubmission,
    setSubmission,
    findSubmission,
    deleteSubmission,
    getPositionsSubmittedFor,
  };
};

export default useSubmissions;
