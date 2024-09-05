import React, { useState } from 'react';
import './newtab/NewTab.css';
import TodoListWidget from './components/TodoList/TodoListWidget';
import Shortcuts from './components/BookMark/Shortcuts';
import SearchBar from './components/SearchBar';
import TimeAndDateWidget from './components/TimeAndDateWidget';
import CalenderWidget from './components/CalenderWidget';
import CodeEditorWidget from './components/CodeEditorWidget';
import ChevronIcon from '../public/chevron.svg'
import GitHubWidget from './components/Github/Github';

const NewTab = () => {
  const [bookmarkFullVisible, setBookmarkFullVisible] = useState(false)

  return (
    <div className={`min-h-screen h-full flex justify-center items-start py-12 w-screen min-w-[580px] overflow-auto NewTab no-scrollbar`}>
      <div className="xl:grid xl:grid-cols-4 xl:h-[624px] min-h-[10rem] gap-x-3 xl:w-[1200px] max-xl:max-w-[700px] w-full max-xl:flex max-xl:flex-col-reverse max-xl:justify-center max-xl:gap-y-6 max-xl:items-center">
          <div className="w-full rounded-2xl bg-white gap-y-2 relative p-2 shadow-2xl xl:hidden">
            <CalenderWidget />
          </div>
        <TodoListWidget />
        <div className='col-span-2 max-xl:w-full xl:h-[624px]'>
          <div className={`max-xl:flex max-xl:flex-col max-xl:items-center max-xl:max-w-[700px] ${!bookmarkFullVisible  ? "h-[250px] overflow-y-hidden" : "h-[580px]"}`}>
          <SearchBar />
          <Shortcuts />
          <CodeEditorWidget />
          </div>
          <div className='flex justify-center items-center w-full mt-5'><div onClick={() => setBookmarkFullVisible(!bookmarkFullVisible)} className='text-[#666666] font-semibold flex justify-center items-end gap-x-1 cursor-pointer hover:opacity-50 transition-all duration-200 flex-shrink-0'>{bookmarkFullVisible ? "Close" : "See More"} <img src={ChevronIcon} alt="Chevron" className={`w-5 h-5 ${bookmarkFullVisible && "rotate-180 transition-all duration-200"}`} /></div></div>
        </div>
        <div className="col-span-1 xl:flex xl:flex-col max-xl:grid max-xl:grid-cols-2 max-xl:gap-x-3 gap-y-3">
          <TimeAndDateWidget />
          <div className="w-full rounded-2xl bg-white gap-y-2 p-2 relative shadow-2xl">
            <GitHubWidget />
          </div>
          <div className="xl:w-full h-full p-2 rounded-2xl bg-white flex flex-col justify-start items-center gap-y-2 relative shadow-2xl max-xl:hidden">
            <CalenderWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTab;
