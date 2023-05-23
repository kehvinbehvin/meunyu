/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, createContext, useState, useContext } from 'react';
import type { ReactNode, SetStateAction, Dispatch } from 'react';

// Define the type for your context data
type ReelsContextType = {
  reels: Reel[];
  showReel: boolean;
  setShowReel: Dispatch<SetStateAction<boolean>>;
};

type Reel = {
  url: string;
};

// Create the context
const ReelsContext = createContext({} as ReelsContextType);

// Create a provider component
const ReelsContextProvider = ({ children }: { children: ReactNode }) => {
  const [reels, setReels] = useState<Reel[]>([]);
  const [showReel, setShowReel] = useState<boolean>(false);

  /**
   * Fetch reels from server
   */
  const getReels = async () => {
    setReels([
      { url: 'https://picsum.photos/1000/1000?random=1' },
      { url: 'https://picsum.photos/1000/1000?random=2' },
      { url: 'https://picsum.photos/1000/1000?random=3' },
      { url: 'https://picsum.photos/1000/1000?random=4' },
      { url: 'https://picsum.photos/1000/1000?random=5' },
    ]);
  };

  useEffect(() => {
    getReels();
  }, []);

  return (
    <ReelsContext.Provider value={{ reels, showReel, setShowReel }}>
      {children}
    </ReelsContext.Provider>
  );
};

const useReelsContext = () => {
  return useContext(ReelsContext);
};

export { ReelsContextProvider, useReelsContext };
