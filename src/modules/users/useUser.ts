import { InternalUserData } from './types';
import {
  useFirestore,
  useFirestoreDoc,
  useFirestoreDocData,
  useUser as useFirebaseUser,
} from 'reactfire';
import getCurrentTimestamp from 'utils/getCurrentTimestamp';

const USER_COLLECTION = 'users';

const useUser = (userId: string) => {
  const firestore = useFirestore();

  const firebaseUser = useFirebaseUser<firebase.User | null>();
  const isLoggedIn = !!firebaseUser;

  const userRef = firestore.collection(USER_COLLECTION).doc(userId);

  const userDoc = useFirestoreDoc(userRef);
  const isSignUpComplete = userDoc.exists;

  const user = useFirestoreDocData(userRef, { idField: 'id' });
  const setUser = async (modifiedUserData: Partial<InternalUserData>) => {
    const { modifiedOn } = getCurrentTimestamp();
    await userRef.set({ ...modifiedUserData, modifiedOn });
  };

  const completeSignUp = async (newUserData: InternalUserData) => {
    if (!firebaseUser) {
      throw new Error(
        'Trying to complete signup for a user who is not logged in.',
      );
    }
    if (isSignUpComplete) {
      throw new Error(
        'Trying to complete signup for a user whose signup is already complete.',
      );
    }

    const { displayName: name, email, photoURL } = firebaseUser;
    await userRef.set({
      name,
      email,
      photoURL,
      ...newUserData,
      ...getCurrentTimestamp(),
    });
  };

  return { user, setUser, isLoggedIn, isSignUpComplete, completeSignUp };
};

export default useUser;