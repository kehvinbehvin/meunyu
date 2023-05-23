/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, createContext, useState, useContext } from 'react';
import type { ReactNode, SetStateAction, Dispatch } from 'react';

// Define the type for your context data
type ReelsContextType = {
  reels: Reel[];
  showReel: boolean;
  setShowReel: Dispatch<SetStateAction<boolean>>;
};

export type Reel = {
  url: string;
  author: string;
  caption: string;
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
      {
        url: 'https://picsum.photos/1000/1000?random=1',
        author: 'James',
        caption: 'A serene sunset over the tranquil ocean.',
      },
      {
        url: 'https://picsum.photos/1000/1000?random=2',
        author: 'Hosan',
        caption:
          'Vibrant autumn leaves painting the landscape in fiery colors.',
      },
      {
        url: 'https://picsum.photos/1000/1000?random=3',
        author: 'Umed',
        caption:
          'A group of friends laughing and enjoying a picnic in the park.',
      },
      {
        url: 'https://picsum.photos/1000/1000?random=4',
        author: 'Don',
        caption:
          'The magnificent city skyline illuminated by a spectacular fireworks display.',
      },
      {
        url: 'https://picsum.photos/1000/1000?random=5',
        author: 'Crack',
        caption:
          'An artist passionately creating a masterpiece on a canvas with vibrant strokes.',
      },
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
