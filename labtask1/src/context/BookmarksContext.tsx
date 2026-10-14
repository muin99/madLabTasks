import { createContext, ReactNode, useContext, useState } from 'react';

type BookmarksValue = {
  bookmarkIds: string[];
  toggleBookmark: (id: string) => void;
};

const BookmarksContext = createContext<BookmarksValue | undefined>(undefined);

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);

  function toggleBookmark(id: string) {
    setBookmarkIds((oldIds) => {
      if (oldIds.includes(id)) {
        return oldIds.filter((oldId) => oldId !== id);
      }
      return [...oldIds, id];
    });
  }

  return (
    <BookmarksContext.Provider value={{ bookmarkIds, toggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const value = useContext(BookmarksContext);
  if (!value) {
    throw new Error('useBookmarks must be inside BookmarksProvider');
  }
  return value;
}
