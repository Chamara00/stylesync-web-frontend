import React, { useState } from 'react';

import './style.css';

function Selection({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleSearch = () => {
    const searchParams = {
      searchText,
      selectedDate,
      selectedOption1,
      selectedOption2
    };
    onSearch(searchParams);
  };

  return (
    <div className='flex'>
      <input
        type="text"
        placeholder="Salon name or location"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="p-2 text-center border border-fontMain  focus:outline-none focus:border-backgroundOne"
      />
      {/* Date input */}
      
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 h-full border border-fontMain  focus:outline-none focus:border-backgroundOne" style={{fontSize:'15px'}}
        />
     
      {/* First select dropdown */}
      <select
        value={selectedOption1}
        onChange={(e) => setSelectedOption1(e.target.value)}
        className="p-2 h-full border border-fontMain  focus:outline-none focus:border-backgroundOne"
      >
        <option value="option1">For Men</option>
        <option value="option2">For Women</option>
      </select>
      {/* Second select dropdown */}
      <select 
        value={selectedOption2}
        onChange={(e) => setSelectedOption2(e.target.value)}
        className="p-2 h-full border border-fontMain  focus:outline-none focus:border-backgroundOne"
      >
        <option value="" disabled hidden>
          Category
        </option>
        
        <option value="option1">Category 1</option>
        <option value="option2">Category 2</option>
      </select>
      {/* Search button */}
      <button onClick={handleSearch} className='p-2 px-8 h-full  border bg-fontMain border-fontMain text-white focus:outline-none focus:border-backgroundOne'>Search</button>
    </div>
  );
}

export default Selection;
