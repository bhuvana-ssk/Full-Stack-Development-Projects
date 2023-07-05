import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState(['Apple', 'Banana', 'Cherry', 'Lychee','Pineapple','Orange','Muskmelon','Watermelon','Mango','Pomegranate','Papaya','Winter Melon','Persian Melon']);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{backgroundColor:'skyblue',width:'100%'}}>
      <h1 style={{marginLeft:'600px'}}>Search Filter</h1>
      <label style={{marginLeft:'550px'}}>Search Here --&gt;</label><input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul style={{marginLeft:'600px'}}>
        {filteredItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
export default SearchFilter;