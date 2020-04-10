import React, { Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import Spinner from 'components/utils/Spinner';
import Centered from 'components/utils/Centered';
import { ThemeDecorator } from 'utils/theme';
import { firebaseConfig } from 'utils/firebase';

const AppProvider: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeDecorator>
        <Suspense
          fallback={
            <Centered color="primary">
              <Spinner />
            </Centered>
          }
        >
          {children}
        </Suspense>
      </ThemeDecorator>
    </FirebaseAppProvider>
  );
};

export default AppProvider;
