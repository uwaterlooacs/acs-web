import React, { Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { ThemeDecorator } from 'utils/theme';
import { firebaseConfig } from 'utils/firebase';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeDecorator>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={<p>loading status...</p>}>{children}</Suspense>
      </FirebaseAppProvider>
    </ThemeDecorator>
  );
};

export default AppProvider;
