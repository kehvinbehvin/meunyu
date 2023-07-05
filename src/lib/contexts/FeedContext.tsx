/* eslint-disable react/jsx-no-constructed-context-values */
import * as identicon from 'identicon';
import { useEffect, createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

import { apiService } from '../api-service';

import { useAppContext } from './AppContext';

// Define the type for your context data
type FeedContextType = {
  feed: FeedItem[];
  uploadFeed: (file: File) => Promise<void>;
};

export type FeedItem = {
  fid: number;
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
  const { delayCloseLoading, setIsLoading, auth, activeLoginModal, isLoading } =
    useAppContext();
  const [feed, setFeed] = useState<FeedItem[]>([]);

  useEffect(() => {
    if (!auth.loggedIn && !isLoading) {
      setTimeout(() => activeLoginModal, 750);
    }
  }, [auth, isLoading]);

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
  const getFeed = async (showLoading = true) => {
    setIsLoading(showLoading);
    const fetchedFeed = await apiService.getFeed();
    const feedWithAvatar = fetchedFeed.data.map(async (_feed: any) => {
      const avatar = await generateAvatar(_feed.User.name);
      return {
        ..._feed,
        avatar,
      };
    });

    setFeed(await Promise.all(feedWithAvatar));
    delayCloseLoading();
  };

  /**
   * Upload image to server
   */
  const uploadFeed = async (file: File) => {
    await apiService.uploadPhoto(file);
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
