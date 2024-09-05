import React, { useState } from 'react';
import PlusIcon from '../../../public/plus.svg';


interface BookmarkProps {
  name: string;
  url: string;
  faviconUrl?: string;
}

interface BookmarkTileProps {
  bookmark: BookmarkProps;
  index: number;
  handleAddBookmark: (index: number) => void;
  handleDeleteBookmark: (index: number) => void;
}

const BookmarkTile: React.FC<BookmarkTileProps> = ({ bookmark, index, handleAddBookmark, handleDeleteBookmark }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      key={index}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className="bg-white w-20 h-20 rounded-xl shadow-xl flex flex-col justify-center items-center gap-y-2 cursor-pointer col-span-1 relative overflow-hidden"
      onClick={ () => handleAddBookmark(index)}>
      {bookmark.name === '' && bookmark.url === '' ? (
        <img src={PlusIcon} alt="plusIcon" className="w-8 h-8" />
      ) : (
        <>
        <img src={bookmark.faviconUrl} alt="Logo" className="w-8 h-8" />
        <div onClick={(e) => (e.stopPropagation() ,
         handleDeleteBookmark(index))}  className={`absolute top-0 right-2 text-[#999999] text-[14px] ${hover ? "flex" : "hidden"}`}>✕</div></>
      )}
      {bookmark.name !== '' && <p className="font-semibold text-center overflow-hidden whitespace-nowrap text-ellipsis w-[75px]">{bookmark.name}</p> }
    </div>
  );
};

export default BookmarkTile;
