import { useCollectionData } from 'modules/data';
import { NewUser, NewUserData } from './types';

const USER_COLLECTION = 'users';

const useUsers = () => {
  const {
    data: users,
    addDoc: addUser,
    removeDoc: removeUser,
  } = useCollectionData<NewUser, NewUserData>(USER_COLLECTION, {
    extraDocData: { isMember: false },
  });

  return { users, addUser, removeUser };
};

export default useUsers;
