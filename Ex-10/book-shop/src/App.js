import React, { useState } from 'react';
import images from './imgImports';

const books = [
  { title: 'Programming in C', release_year: 2020, publisher: 'Oxford', image: `${images[0]['img']}` },
  { title: 'Indian Economy', release_year: 2023, publisher: 'Pearson', image: `${images[1]['img']}` },
  { title: 'Head First Java', release_year: 2021, publisher: 'TMH', image:`${images[2]['img']}` },
  { title: 'Python Programming', release_year: 2022, publisher: 'Oxford', image: `${images[3]['img']}`},
  { title: 'To Sleep in a Sea of Stars', release_year: 2022, publisher: 'Macmillan', image: `${images[4]['img']}` },

];

const BookList = () => {
  const [selectedPublisher, setSelectedPublisher] = useState('All');
  const [selectedYear, setSelectedYear] = useState(0);

  const filteredBooks = books.filter(book => {
    const matchesPublisher = selectedPublisher === 'All' || book.publisher === selectedPublisher;
    const matchesYear = selectedYear === 0 || book.release_year === selectedYear;

    return matchesPublisher && matchesYear;
  });

  const handlePublisherChange = e => {
    setSelectedPublisher(e.target.value);
  };

  const handleYearChange = e => {
    setSelectedYear(parseInt(e.target.value));
  };

  return (
    <div style={{backgroundColor:'orchid', height:'100%'}}>
      <center>
      <h1>Book Shop</h1>

      <div>
        <label htmlFor="publisher-filter">Filter by Publisher: &nbsp;</label>
        <select id="publisher-filter" value={selectedPublisher} onChange={handlePublisherChange}>
          <option value="All">All</option>
          <option value="Pearson">Pearson</option>
          <option value="Macmillan">Macmillan</option>
          <option value="TMH">TMH</option>
          <option value="Oxford">Oxford</option>
        </select>
      </div>

      <div>
        <label htmlFor="year-filter">Filter by Year: &nbsp;</label>
        <select id="year-filter" value={selectedYear} onChange={handleYearChange}>
          <option value="0">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          </select>
          </div>
          </center>
          <br></br>
          <ul style={{alignContent:'center', marginLeft:'600px'}}>
        {filteredBooks.map((book, index) => (
      <li key={index}>
        <img src={book.image} alt={book.title} height={'300px'} width={'200px'} />
        <h2>{book.title}</h2>
        <p>Release Year: {book.release_year}</p>
        <p>Publisher: {book.publisher}</p>
      </li>
    ))}
  </ul>
  <br></br>
</div>
);
};
export default BookList;