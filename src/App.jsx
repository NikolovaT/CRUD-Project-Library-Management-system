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
    publicationDate: "1",
  },
  {
    id: 2,
    title: "2",
    author: "2",
    isbn: "2",
    price: "2",
    publicationDate: "2",
  }
];

const App = () => {
  const [books, setBooks] = useState(initialBooks);
  const [selectedBook, setSelectedBook] = useState({ id: '', title: '', author: '', isbn: '', price: '', publicationDate: '' });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedBook({ ...selectedBook, [name]: value });
  };

  const handleSave = (newBook) => {
    if (selectedBook) {
      const updatedBooks = books.map(book => {
        if (book.id === selectedBook.id) {
          return { ...book, ...newBook };
        }
        return book;
      });
      console.log(updatedBooks);
      setBooks(updatedBooks);
      setSelectedBook(null); 
    } else {
      const newBookWithId = { ...newBook, id: books.length + 1 };
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
    console.log(book);
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
