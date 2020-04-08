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
  const submissions = useFirestoreCollectionData<Submission>(submissionsRef);

  const addSubmission = async (submissionUserData: SubmissionUserData) => {
    if (!isSignUpComplete || !firebaseUser) {
      throw new Error(
        'Cannot add a submission for a user that has not completely.',
      );
    }

    const submissionData: SubmissionData = {
      ...submissionUserData,
      candidate: firebaseUser.uid,
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
    const submissionRef = submissionsRef.doc(submissionId);
    await submissionRef.set(submissionUserData);
  };

  return { submissions, addSubmission, setSubmission };
};

export default useSubmissions;
