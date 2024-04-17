import React, { useState } from 'react';
import search from '../assests/images/search.png';

const Search = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="relative">
      <img src={search} alt='search' className='cursor-pointer' onClick={toggleSearch} />
     
      
  
      {isSearchVisible && (
        <input
          type="text"
          placeholder="Search..."
          className="absolute top-0 right-0 mt-10 mr-2 p-2 border border-gray-300 rounded"
        />
      )}
    </div>
  );
};

export default Search;
