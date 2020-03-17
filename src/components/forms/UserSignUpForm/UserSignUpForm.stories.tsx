import React from 'react';
import UserSignUpForm from './UserSignUpForm';

export default { title: 'Forms|UserSignUpForm' };

export const Base = () => {
  return (
    <UserSignUpForm
      externalUserData={{
        name: 'Joshua Allum',
        email: 'joshuatallum@gmail.com',
        photoURL: 'none',
      }}
    />
  );
};
