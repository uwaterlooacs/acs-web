import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Octicon, { Mail, Person, Book } from '@primer/octicons-react';
import Box from 'components/Box';
import Button from 'components/buttons/Button';
import Centered from 'components/utils/Centered';
import { Input, Label, Select } from 'components/utils/input';
import { useUser } from 'modules/users';
import { validateWaterlooEmail, validateStudentNumber } from './utils';
import { FACULTY_OPTIONS } from './constants';

const VoteCompleteSignUp = () => {
  const {
    firebaseUser,
    isLoggedIn,
    isSignUpComplete,
    completeSignUp,
  } = useUser();

  const [waterlooEmail, setWaterlooEmail] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [faculty, setFaculty] = useState(FACULTY_OPTIONS[0].value);

  const [tryedToSubmit, setTryedToSubmit] = useState(false);

  const isWaterlooEmailValid = validateWaterlooEmail(waterlooEmail);
  const showWaterlooEmailError = tryedToSubmit && !isWaterlooEmailValid;
  const isStudentNumberValid = validateStudentNumber(studentNumber);
  const showStudentNumberError = tryedToSubmit && !isStudentNumberValid;

  const submit = async () => {
    if (!isWaterlooEmailValid || !isStudentNumberValid) {
      setTryedToSubmit(true);
      return;
    }
    await completeSignUp({
      waterlooEmail,
      studentNumber: parseInt(studentNumber),
      faculty,
    });
  };

  if (!isLoggedIn || isSignUpComplete) {
    return <Redirect to="/voting" />;
  }

  return (
    <Box>
      <Box mt={2} p={3} m="0 auto" maxWidth={600}>
        <p>
          Hey {firebaseUser?.displayName}! We just need a little more
          information to complete your sign up.
        </p>
        <Box>
          <Label error={showWaterlooEmailError}>UW email address</Label>
          <Box display="flex" alignItems="center">
            <Octicon icon={Mail} />
            <Input
              ml="S"
              type="email"
              placeholder="yourquestid@uwaterloo.ca"
              value={waterlooEmail}
              onChange={e => setWaterlooEmail(e.target.value)}
              error={showWaterlooEmailError}
            />
          </Box>
          {showWaterlooEmailError && (
            <Box color="error" fontSize="S" mb={3}>
              UW Email Address is invalid. It must be the email address provided
              by the school and must end in <strong>@edu.uwaterloo.ca</strong>{' '}
              or <strong>@uwaterloo.ca</strong>.
            </Box>
          )}
        </Box>
        <Box>
          <Label error={showStudentNumberError}>Student Number</Label>
          <Box display="flex" alignItems="center">
            <Octicon icon={Person} />
            <Input
              ml="S"
              type="number"
              placeholder="your 8 digit student number"
              value={studentNumber}
              onChange={e => setStudentNumber(e.target.value)}
              error={showStudentNumberError}
            />
          </Box>
          {showStudentNumberError && (
            <Box color="error" fontSize="S" mb={3}>
              Student number is invalid. It must be the student number provided
              by the school and must 8 digits long.
            </Box>
          )}
        </Box>
        <Box>
          <Label>Faculty</Label>
          <Box display="flex" alignItems="center">
            <Octicon icon={Book} />
            <Select
              ml="S"
              value={faculty}
              onChange={e => setFaculty(e.target.value)}
            >
              {FACULTY_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Box>
        </Box>
        <Centered mt={3}>
          <Button onClick={submit}>Submit</Button>
        </Centered>
      </Box>
    </Box>
  );
};

export default VoteCompleteSignUp;
