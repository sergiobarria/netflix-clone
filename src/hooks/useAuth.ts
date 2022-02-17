import { useContext } from 'react';

import { AuthContext } from '@/context/auth.context';

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'Auth context should be used inside an Auth Context Provider'
    );
  }

  return context;
}
