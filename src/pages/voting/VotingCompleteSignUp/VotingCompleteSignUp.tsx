import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Octicon, {
  Mail,
  Person,
  Book,
  MortarBoard,
  Globe,
  Calendar,
} from '@primer/octicons-react';
import Box from 'components/Box';
import Button from 'components/buttons/Button';
import Centered from 'components/utils/Centered';
import { Input, Label, Select } from 'components/utils/input';
import { useUser } from 'modules/users';
import { validateWaterlooEmail, validateStudentNumber } from './utils';
import {
  FACULTY_OPTIONS,
  PROGRAM_OPTIONS_BY_FACULTY,
  FacultyOptionValue,
  FROM_OPTIONS,
  START_TERM_OPTIONS,
  START_YEAR_OPTIONS,
} from './constants';

const VoteCompleteSignUp = () => {
  const {
    user,
    firebaseUser,
    isLoggedIn,
    isSignUpComplete,
    completeSignUp,
  } = useUser();

  const [waterlooEmail, setWaterlooEmail] = useState(user.waterlooEmail ?? '');
  const [studentNumber, setStudentNumber] = useState(
    user.studentNumber?.toString() ?? '',
  );
  const [faculty, setFaculty] = useState<FacultyOptionValue>(
    FACULTY_OPTIONS[0].value,
  );
  const [program, setProgram] = useState<string>(
    PROGRAM_OPTIONS_BY_FACULTY[faculty][0].value,
  );
  const [from, setFrom] = useState<string>(FROM_OPTIONS[0].value);
  const [startYear, setStartYear] = useState<string>(
    START_YEAR_OPTIONS[0].value,
  );
  const [startTerm, setStartTerm] = useState<string>(
    START_TERM_OPTIONS[0].value,
  );

  const [tryedToSubmit, setTryedToSubmit] = useState(false);

  const isWaterlooEmailValid = validateWaterlooEmail(waterlooEmail);
  const showWaterlooEmailError = tryedToSubmit && !isWaterlooEmailValid;
  const isStudentNumberValid = validateStudentNumber(studentNumber);
  const showStudentNumberError = tryedToSubmit && !isStudentNumberValid;
  const isFromValid = from !== '';
  const showFromError = tryedToSubmit && !isFromValid;

  const submit = async () => {
    if (!isWaterlooEmailValid || !isStudentNumberValid || !isFromValid) {
      setTryedToSubmit(true);
      return;
    }
    await completeSignUp({
      waterlooEmail,
      studentNumber: parseInt(studentNumber),
      faculty,
      from,
      startYear: parseInt(startYear),
      startTerm,
      program,
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
        <form>
          <Box mt={4}>
            <Label error={showWaterlooEmailError}>UW email address</Label>
            <Box display="flex" alignItems="center">
              <Octicon width={16} icon={Mail} />
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
                UW Email Address is invalid. It must be the email address
                provided by the school and must end in{' '}
                <strong>@edu.uwaterloo.ca</strong> or{' '}
                <strong>@uwaterloo.ca</strong>.
              </Box>
            )}
          </Box>
          <Box mt={4}>
            <Label error={showStudentNumberError}>Student Number</Label>
            <Box display="flex" alignItems="center">
              <Octicon width={16} icon={Person} />
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
                Student number is invalid. It must be the student number
                provided by the school and must 8 digits long.
              </Box>
            )}
          </Box>
          <Box mt={4}>
            <Label>Faculty</Label>
            <Box display="flex" alignItems="center">
              <Octicon width={16} icon={MortarBoard} />
              <Select
                ml="S"
                value={faculty}
                onChange={e => setFaculty(e.target.value as FacultyOptionValue)}
              >
                {FACULTY_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Box>
          </Box>
          <Box mt={4}>
            <Label>Program</Label>
            <Box display="flex" alignItems="center">
              <Octicon width={16} icon={Book} />
              <Select
                ml="S"
                value={program}
                onChange={e => setProgram(e.target.value)}
              >
                {PROGRAM_OPTIONS_BY_FACULTY[faculty].map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Box>
          </Box>
          <Box mt={4}>
            <Label>Where are you from?</Label>
            <Box display="flex" alignItems="center">
              <Octicon width={16} icon={Globe} />
              <Select
                ml="S"
                value={from}
                onChange={e => setFrom(e.target.value)}
                error={showFromError}
              >
                {FROM_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Box>
          </Box>
          <Box mt={4}>
            <Label>Start term and year</Label>
            <Box display="flex" alignItems="center">
              <Octicon width={16} icon={Calendar} />
              <Box flex={1} display="flex" alignItems="center">
                <Select
                  ml="S"
                  value={startTerm}
                  onChange={e => setStartTerm(e.target.value)}
                >
                  {START_TERM_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                <Select
                  ml="S"
                  value={startYear}
                  onChange={e => setStartYear(e.target.value)}
                >
                  {START_YEAR_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </Box>
            </Box>
          </Box>
          <Centered mt={3}>
            <Button type="button" onClick={submit}>
              Submit
            </Button>
          </Centered>
        </form>
      </Box>
    </Box>
  );
};

export default VoteCompleteSignUp;
