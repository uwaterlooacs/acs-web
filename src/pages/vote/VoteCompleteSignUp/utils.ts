const WaterlooEmailRegex = /^[A-Z0-9._%+-]+@(edu\.)?uwaterloo\.ca$/i;
export const validateWaterlooEmail = (waterlooEmail: string) => {
  return WaterlooEmailRegex.test(waterlooEmail);
};

const StudentNumberRegex = /^\d{8}$/;
export const validateStudentNumber = (studentNumber: string) => {
  return StudentNumberRegex.test(studentNumber);
};
