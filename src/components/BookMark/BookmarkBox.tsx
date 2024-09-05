import React from 'react'
import BookmarkTile from './BookmarkTile'
import DocumentsImg from '../../../public/Documents.png'
import { BookmarkProps } from './Shortcuts';

interface BookmarkBoxProps {
  imgUrl: string;
  bookmarkArray: BookmarkProps[];
  handleAddItem: (x:BookmarkProps[], index: number) => Promise<void>;
  handleDeleteItem: (x:BookmarkProps[], index: number) => void;
}

const BookmarkBox: React.FC<BookmarkBoxProps> = ({imgUrl, bookmarkArray,handleAddItem, handleDeleteItem }) => {
  return (
    <div className={`grid grid-rows-2 justify-items-center gap-y-4 w-full ${bookmarkArray.length <= 5 ? "grid-cols-3" : "grid-cols-6"}`}>
    <div
      className="bg-white w-20 h-20 rounded-xl shadow-xl flex flex-col justify-center items-center col-span-1 relative overflow-hidden flex-shrink-0">
      <img src={imgUrl} alt="imgUrl" className='w-full h-full'/>
    </div>
    {bookmarkArray.map((item, index) => (
      <BookmarkTile key={index} bookmark={item} index={index} handleAddBookmark={() => handleAddItem(bookmarkArray, index)} handleDeleteBookmark={() => handleDeleteItem(bookmarkArray, index)} />
    ))}
    </div>
  )
}

export default BookmarkBox