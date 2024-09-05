import React, { useState, useEffect } from 'react';
import ShortcutImg from '../../../public/ShortcutB.png'
import DocumentsImg from '../../../public/Documents.png'
import Counter from '../Counter/Counter';
import BookmarkBox from './BookmarkBox';

export interface BookmarkProps {
  name: string;
  url: string;
  faviconUrl?: string;
}

const Shortcuts = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkProps[]>(Array(11).fill({ name: '', url: '', faviconUrl: '' }));
  const [documents, setDocuments] = useState<BookmarkProps[]>(Array(5).fill({ name: '', url: '', faviconUrl: '' }));

  // Load bookmarks from local storage when the component mounts
  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    const storedDocuments = localStorage.getItem('documents');
    storedBookmarks && setBookmarks(JSON.parse(storedBookmarks));
    storedDocuments && setDocuments(JSON.parse(storedDocuments));
  }, []);

  const fetchLargeIcon = async (url: string): Promise<string> => {
    try {
      const domain = new URL(url).hostname;
      return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}/&size=64`;
    } catch (error) {
      console.error('Failed to fetch large icon:', error);
      return '/path/to/default-icon.png';
    }
  };

  const handleAddItem = async (array: BookmarkProps[], index: number) => {
    const existingItem = array[index];
  
    if (existingItem.url) {
      window.open(existingItem.url, '_blank');
      return;
    }
  
    const url = prompt('Enter website URL:');
    if (!url) return;
  
    const name = prompt('Enter website Name:');
    if (!name) return;
  
    try {
      const faviconUrl = await fetchLargeIcon(url);
  
      const newArray = [...array];
      newArray[index] = { name, url, faviconUrl };
      
      if (array === bookmarks) {
        setBookmarks(newArray);
        localStorage.setItem('bookmarks', JSON.stringify(newArray));
      } else {
        setDocuments(newArray);
        localStorage.setItem('documents', JSON.stringify(newArray));
      }
    } catch (error) {
      console.error('Error fetching favicon:', error);
    }
  };
  
  const handleDeleteItem = (array: BookmarkProps[], index: number) => {

    const newArray = [...array];
    newArray[index] = { name: '', url: '', faviconUrl: '' };

    if (array === bookmarks) {
      setBookmarks(newArray);
      localStorage.setItem('bookmarks', JSON.stringify(newArray));
    } else {
      setDocuments(newArray);
      localStorage.setItem('documents', JSON.stringify(newArray));
    }
  };

  return (
    <div className='flex flex-col gap-y-6 mb-5 w-full'>
      <BookmarkBox imgUrl={ShortcutImg} bookmarkArray={bookmarks} handleAddItem={handleAddItem} handleDeleteItem={handleDeleteItem} />
      <div className='grid grid-cols-2'>
      <BookmarkBox imgUrl={DocumentsImg} bookmarkArray={documents} handleAddItem={handleAddItem} handleDeleteItem={handleDeleteItem} />
      <div className='w-full h-full px-2'>
      <Counter />
      </div>
      </div>
    </div>
  );
};

export default Shortcuts;