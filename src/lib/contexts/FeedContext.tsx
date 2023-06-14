/* eslint-disable react/jsx-no-constructed-context-values */
import { faker } from '@faker-js/faker';
import * as identicon from 'identicon';
import { useEffect, createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

// Define the type for your context data
type FeedContextType = {
  feed: FeedItem[];
  uploadFeed: (file: File) => Promise<void>;
};

export type FeedItem = {
  url: string;
  author: string;
  caption: string;
  avatar: HTMLImageElement;
  likes: number[];
  created_at: string;
};

// Create the context
const FeedContext = createContext({} as FeedContextType);

// Create a provider component
const FeedContextProvider = ({ children }: { children: ReactNode }) => {
  const [feed, setFeed] = useState<FeedItem[]>([]);

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
   * Fetch feed from server
   */
  const getFeed = async () => {
    const fetchedFeed = await (await fetch('/api/event-photo')).json();
    const feedWithAvatar = fetchedFeed.data.map(async (_feed: any) => {
      const avatar = await generateAvatar(_feed.url);
      return {
        author: faker.person.firstName(),
        ..._feed,
        avatar,
      };
    });

    setFeed(await Promise.all(feedWithAvatar));
  };

  /**
   * Upload image to server
   */
  const uploadFeed = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    await fetch('/api/event-photo', {
      method: 'POST',
      body: formData,
    });
    await getFeed();
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <FeedContext.Provider value={{ feed, uploadFeed }}>
      {children}
    </FeedContext.Provider>
  );
};

const useFeedContext = () => {
  return useContext(FeedContext);
};

export { FeedContextProvider, useFeedContext };
