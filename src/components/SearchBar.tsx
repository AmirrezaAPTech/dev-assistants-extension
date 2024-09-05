import React, { useState } from 'react'; 
import SearchIcon from '../../public/search.svg'
import GoogleIcon from '../../public/google.svg'
 
const SearchBar: React.FC = () => { 
  const [query, setQuery] = useState(''); 
 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setQuery(event.target.value); 
  }; 
 
  const handleSearch = () => { 
    if (query.trim()) { 
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`; 
      window.location.href = searchUrl; 
    } 
  }; 
 
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => { 
    if (event.key === 'Enter') { 
      handleSearch(); 
    } 
  }; 
 
  return ( 
      <div className="w-full relative mb-5"> 
        <input 
          type="text" 
          placeholder="Search with Google" 
          className="w-full h-12 rounded-xl px-9 text-[15px]" 
          value={query} 
          onChange={handleInputChange} 
          onKeyPress={handleKeyPress} 
        /> 
          <img src={GoogleIcon} alt="GoogleIcon" className='w-5 h-5 absolute left-2 top-4'/>
        <div className="absolute right-3 top-4"> 
          <button className="search-button" onClick={handleSearch}>
            <img src={SearchIcon} alt="SearchIcon" className='w-5 h-5'/>
          </button> 
        </div> 
      </div>  
  ); 
}; 
 
export default SearchBar;
