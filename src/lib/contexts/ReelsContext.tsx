/* eslint-disable react/jsx-no-constructed-context-values */
import * as identicon from 'identicon';
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
  avatar: HTMLImageElement;
  likes: number;
};

// Create the context
const ReelsContext = createContext({} as ReelsContextType);

// Create a provider component
const ReelsContextProvider = ({ children }: { children: ReactNode }) => {
  const [reels, setReels] = useState<Reel[]>([]);
  const [showReel, setShowReel] = useState<boolean>(false);

  const generateAvatar = (author: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      identicon.generate(
        { id: author, size: 150 },
        (err: Error, buffer: string) => {
          if (err) reject(err);
          const img = new Image();
          img.src = buffer;
          resolve(img);
        }
      );
    });
  };

  /**
   * Fetch reels from server
   */
  const getReels = async () => {
    const fetchedReels = [
      {
        url: 'https://picsum.photos/1000/1000?random=1',
        author: 'Alan',
        caption: 'A serene sunset over the tranquil ocean.',
        likes: 54,
      },
      {
        url: 'https://picsum.photos/1000/1000?random=2',
        author: 'Kim',
        caption:
          'Vibrant autumn leaves painting the landscape in fiery colors.',
        likes: 23,
      },
      {
        url: 'https://picsum.photos/1000/1000?random=3',
        author: 'Jon',
        caption:
          'A group of friends laughing and enjoying a picnic in the park.',
        likes: 17,
      },
      {
        url: 'https://picsum.photos/1000/1000?random=4',
        author: 'Garei',
        caption:
          'The magnificent city skyline illuminated by a spectacular fireworks display.',
        likes: 2,
      },
      {
        url: 'https://picsum.photos/1000/1000?random=5',
        author: 'Rachel',
        caption:
          'An artist passionately creating a masterpiece on a canvas with vibrant strokes.',
        likes: 1,
      },
    ];

    const reelsWithAvatar = fetchedReels.map(async (reel) => {
      const avatar = await generateAvatar(reel.author);
      return {
        ...reel,
        avatar,
      };
    });

    setReels(await Promise.all(reelsWithAvatar));
  };

  useEffect(() => {
    getReels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
