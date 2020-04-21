import { useUser } from 'modules/users';
import { useFirestore, useFirestoreDocData } from 'reactfire';

const useVote = () => {
  const { user } = useUser();

  const firestore = useFirestore();
  const voteRef = firestore.collection('votes').doc(user.id);
  const vote = useFirestoreDocData<Record<string, string>>(voteRef, {
    idField: 'id',
  });

  const castVote = (position: string, candidate: string) => {
    voteRef.set({ [position]: candidate }, { merge: true });
  };

  return { vote, castVote };
};

export default useVote;
