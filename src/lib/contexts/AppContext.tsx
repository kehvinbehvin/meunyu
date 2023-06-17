/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

// Define the type for your context data
type AppContextType = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  delayCloseLoading: (delay?: number) => Promise<void>;
};

// Create the context
const AppContext = createContext({} as AppContextType);

// Create a provider component
const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const delayCloseLoading = async (delay = 5000) => {
    setTimeout(() => setIsLoading(false), delay);
  };

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading, delayCloseLoading }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
