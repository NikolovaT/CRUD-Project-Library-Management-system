import React, { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import List from './components/List';
import Details from './components/Details';
import Footer from './components/Footer';

const initialBooks = [
  {
    id: 1,
    title: "1",
    author: "1",
    isbn: "1",
    price: "1",
    publicationDate: "Mon Aug 05 2022 09:00:00 GMT+0300 (Източноевропейско лятно часово време)",
  },
  {
    id: 2,
    title: "2",
    author: "2",
    isbn: "2",
    price: "2",
    publicationDate: "Sun Jul 02 2023 03:00:00 GMT+0300 (Източноевропейско лятно часово време)",
  }
];

const App = () => {
  const [books, setBooks] = useState(initialBooks);
  const [selectedBook, setSelectedBook] = useState(null);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedBook({ ...selectedBook, [name]: value });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const timeZoneOffset = -date.getTimezoneOffset() / 60;
    const timeZoneOffsetString = (timeZoneOffset >= 0 ? '+' : '') + timeZoneOffset.toString().padStart(2, '0') + '00';

    return `${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()]} ${day} ${year} ${hours}:${minutes}:${seconds} GMT${timeZoneOffsetString} (Източноевропейско лятно часово време)`;
  };

  const handleSave = (newBook) => {
    if (selectedBook) {
      const updatedBooks = books.map(book => {
        if (book.id === selectedBook.id) {
          return { ...book, ...newBook };
        }
        return book;
      });
      setBooks(updatedBooks);
      setSelectedBook(null); 
    } 
    else {
      const newBookWithId = { ...newBook, id: books.length + 1, publicationDate: formatDate(newBook.publicationDate) };
      setBooks([...books, newBookWithId]);
    }
  };

  const handleDelete = (id) => {
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks.map((book, index) => ({ ...book, id: index + 1 })));
    if (selectedBook && selectedBook.id === id) {
      setSelectedBook(null);
    }
  };

  const handleItemClick = (book) => {
    setSelectedBook(book);
  };

  const handleClear = () => {
    setSelectedBook(null); 
  };

  return (
    <div>
      <Navbar />
      <List books={books} handleDelete={handleDelete} handleItemClick={handleItemClick} className="content-list"/>
      <Details selectedBook={selectedBook} handleSave={handleSave} handleClear={handleClear} className="content-details" />
      <Footer />
    </div>
  );
}

export default App;
