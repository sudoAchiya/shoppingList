import { createContext, useContext } from 'react';
import { CurrentConnectedUser } from '@/api/generated/model';

type AuthContextType = {
  user: CurrentConnectedUser | undefined;
  setUser: (user: CurrentConnectedUser | undefined) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider',
    );
  }

  return context;
};
