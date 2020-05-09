import { InternalUserData, User } from './types';
import {
  useFirestore,
  useFirestoreDoc,
  useFirestoreDocData,
  useUser as useFirebaseUser,
} from 'reactfire';
import getCurrentTimestamp from 'utils/getCurrentTimestamp';

const USER_COLLECTION = 'users';

const useUser = () => {
  const firestore = useFirestore();

  const firebaseUser = useFirebaseUser<firebase.User | null>();
  const isLoggedIn = !!firebaseUser;

  const userRef = firestore
    .collection(USER_COLLECTION)
    .doc(firebaseUser?.uid ?? 'notloggedin');
  const userDoc = useFirestoreDoc(userRef);
  const user = useFirestoreDocData<User>(userRef, { idField: 'id' });

  const isSignUpComplete = userDoc.exists && user.program;
  const setUser = async (modifiedUserData: Partial<InternalUserData>) => {
    if (!firebaseUser) {
      throw new Error(
        'Trying to set user data for a user who is not logged in.',
      );
    }
    if (isSignUpComplete) {
      throw new Error(
        'Trying to set user data for a user whose signup is already complete.',
      );
    }

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

  return {
    firebaseUser,
    user,
    setUser,
    isLoggedIn,
    isSignUpComplete,
    completeSignUp,
  };
};

export default useUser;
