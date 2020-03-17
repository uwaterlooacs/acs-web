import firebase from 'firebase/app';
import 'firebase/auth';
import { User } from 'modules/users';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to "/" after sign in is successful.
  // Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/',
  // We will display Google, Facebook and email as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

type AuthCallback = (result: { user: firebase.User }) => boolean;

export const createUIConfig = (signInSuccessWithAuthResult: AuthCallback) => {
  return {
    ...uiConfig,
    callbacks: {
      signInSuccessWithAuthResult,
    },
  };
};
