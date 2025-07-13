import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useAuthControllerAuthenticatedUser } from '@/api/generated/generated';
import { CurrentConnectedUser } from '@/api/generated/model';
import { configuration } from '@/config';
import { AuthContext } from '@/context/AuthContext/AuthContext';

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const {
    data: fetchedUser,
    error,
    isLoading,
  } = useAuthControllerAuthenticatedUser();
  const [user, setUser] = useState<CurrentConnectedUser | undefined>(undefined);

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser);
    }

    if (error) {
      const returnTo = encodeURIComponent(window.location.href);
      window.location.href = `${configuration.VITE_AUTH_URL}?returnTo=${returnTo}`;
    }
  }, [fetchedUser, error]);

  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? children : <>אין גישה</>}
    </AuthContext.Provider>
  );
};
