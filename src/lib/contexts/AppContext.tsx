/* eslint-disable react/jsx-no-constructed-context-values */
import { useRouter } from 'next/router';
import { createContext, useState, useContext, useEffect } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

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
  const delayCloseLoading = async (delay = 2000) => {
    setTimeout(() => setIsLoading(false), delay);
  };

  const fetchUser = async (userId: string): Promise<User> => {
    return (await fetch(`/api/user/${userId}`)).json();
  };

  const login = async (userId: string) => {
    const user = await fetchUser(userId as string);
    setAuth({ loggedIn: true, user });
    localStorage.setItem('user', JSON.stringify(user));
  };

  const getUser = async () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user') as string);
      setAuth({ loggedIn: true, user });
    } else {
      const { userId } = router.query;
      if (userId) {
        login(userId as string);
      } else {
        setAuth({ loggedIn: false, user: null });
      }
    }
  };

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
