import React, { Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { ThemeDecorator } from 'utils/theme';
import { firebaseConfig } from 'utils/firebase';

const AppProvider: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeDecorator>
        <Suspense fallback={<p>loading status...</p>}>{children}</Suspense>
      </ThemeDecorator>
    </FirebaseAppProvider>
  );
};

export default AppProvider;
