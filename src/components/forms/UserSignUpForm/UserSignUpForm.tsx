import React, { useState } from 'react';
import Box from 'components/Box';
import useUsers, { ExternalUserData } from 'modules/users';
import Button from 'components/buttons/Button';
import FACULTY_NAMES from 'utils/facultyNames';

type UserSignUpFormProps = {
  externalUserData: ExternalUserData;
  onSignUp?: () => void;
};
const UserSignUpForm: React.FC<UserSignUpFormProps> = ({
  externalUserData,
  onSignUp,
}) => {
  const [studentNumber, setStudentNumber] = useState<number>();
  const [faculty, setFaculty] = useState<string>(FACULTY_NAMES[0]);

  const { addUser } = useUsers();

  const signUp = async () => {
    if (studentNumber !== undefined && faculty !== undefined) {
      await addUser({
        ...externalUserData,
        studentNumber,
        faculty,
      });

      onSignUp && onSignUp();
    }
  };

  return (
    <Box>
      <h1>Hey, we just need a little more info to sign you up.</h1>
      <Box>
        <input
          type="number"
          value={studentNumber ?? ''}
          onChange={e => setStudentNumber(parseInt(e.target.value))}
          placeholder="Student Number"
        />
        <select value={faculty} onChange={e => setFaculty(e.target.value)}>
          {FACULTY_NAMES.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Box>
      <Button mt={3} onClick={signUp}>
        Sign up
      </Button>
    </Box>
  );
};

export default UserSignUpForm;
