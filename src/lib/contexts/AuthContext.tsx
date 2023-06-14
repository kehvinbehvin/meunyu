/* eslint-disable react/jsx-no-constructed-context-values */
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

// Define the type for your context data
type AuthContextType = {
  name: string;
  id: number | null;
  isAdmin: boolean;
};

// Create the context
const AuthContext = createContext({} as AuthContextType);

// Create a provider component
const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const userId = router.query.user_id;

  const logIn = async () => {
    if (status === 'unauthenticated') {
      const res = await signIn('credentials', { userId, redirect: false });
    } else if (status === 'authenticated') {
      setName(session.username);
      setId(session.id);
      setIsAdmin(session.isAdmin);
    }
  };

  useEffect(() => {
    logIn();
  }, [status]);

  return (
    <AuthContext.Provider value={{ name, id, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };
