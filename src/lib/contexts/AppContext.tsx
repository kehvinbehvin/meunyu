/* eslint-disable react/jsx-no-constructed-context-values */
import * as Sentry from '@sentry/nextjs';
import { useRouter } from 'next/router';
import { createContext, useState, useContext, useEffect, useMemo } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { apiService } from '../api-service';

// Define the type for your context data
type AppContextType = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  delayCloseLoading: (delay?: number) => Promise<void>;
  auth: { loggedIn: boolean; user: User | null };
  login: (userId: string) => void;
  triggerModal: number;
  activeLoginModal: () => void;
  authGuard: (callback: any) => any;
  allUsers: User[];
  language: 'en' | 'ko';
};

// Create the context
const AppContext = createContext({} as AppContextType);

// Create a provider component
const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [triggerModal, setTriggerModal] = useState(0);
  const router = useRouter();
  const [auth, setAuth] = useState<{ loggedIn: boolean; user: User | null }>({
    loggedIn: true, // defaulted as true to prevent login modal from flashing
    user: null,
  });
  const [allUsers, setAllUsers] = useState([]);
  const delayCloseLoading = async (delay = 2000) => {
    setTimeout(() => setIsLoading(false), delay);
  };

  const language = useMemo(() => auth.user?.language || 'en', [auth]);

  const login = async (userId: string) => {
    const user = await apiService.getUser(userId as string);
    apiService.addJWTToken(user.token);
    setAuth({ loggedIn: true, user });
    localStorage.setItem('user', JSON.stringify(user));
  };

  const getAllUsers = async () => {
    const users = await apiService.getUsers();
    setAllUsers(users);
  };

  const getUser = async () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user') as string);
      apiService.addJWTToken(user.token);
      setAuth({ loggedIn: true, user });
    } else {
      const { userId } = router.query;
      if (userId) {
        login(userId as string);
      } else {
        setAuth({ loggedIn: false, user: null });
        getAllUsers();
      }
    }
  };

  useEffect(() => {
    if (auth.user) {
      Sentry.setUser({ username: auth.user.name });
    }
  }, [auth.user]);

  const activeLoginModal = () => {
    setTriggerModal(triggerModal + 1);
  };

  const authGuard = (callback: () => unknown) => {
    if (auth.loggedIn) {
      callback();
    } else {
      setTriggerModal(triggerModal + 1);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        delayCloseLoading,
        auth,
        login,
        triggerModal,
        activeLoginModal,
        authGuard,
        allUsers,
        language,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
