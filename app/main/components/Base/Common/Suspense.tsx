import LoadingScreen from '@components/Base/Screens/LoadingScreen';
import React from 'react';

type Props = {fallback?: React.ReactNode; children: React.ReactNode};

export default function Suspense(props: Props) {
  return <React.Suspense fallback={<LoadingScreen />} {...props} />;
}
