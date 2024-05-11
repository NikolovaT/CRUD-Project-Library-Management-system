import React, { useState } from 'react';

const Details = ({ handleSave, selectedBook }) => {
  const [title, setTitle] = useState(selectedBook ? selectedBook.title : '');
  const [author, setAuthor] = useState(selectedBook ? selectedBook.author : '');
  const [isbn, setIsbn] = useState(selectedBook ? selectedBook.isbn : '');
  const [price, setPrice] = useState(selectedBook ? selectedBook.price : '');
  const [publicationDate, setPublicationDate] = useState(selectedBook ? selectedBook.publicationDate : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !isbn || !price || !publicationDate) {
      alert("Please fill in all fields.");
      return;
    }
    handleSave({ title, author, isbn, price, publicationDate });
  };

  function resetForm() {
    setTitle('');
    setAuthor('');
    setIsbn('');
    setPrice('');
    setPublicationDate('');
  }

  return (
    <div className="content-details">
      <form onSubmit={handleSubmit}>
        <input type="text" id="field1" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="form-control" aria-label="Default"/><br></br>
        <input type="text" id="field2" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" className="form-control" aria-label="Default"/><br></br>
        <input type="text" id="field3" value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="ISBN" className="form-control" aria-label="Default"/><br></br>
        <input type="text" id="field4" value={price} onChange={(e) => setPrice(e.target.value) } placeholder="Price" className="form-control" aria-label="Default"/><br></br>
        <input type="date" id="field5" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} placeholder="Publication Date" className="form-control" aria-label="Default"/><br></br>
        <button type="submit" id="saveButton" className='btn btn-outline-success col-6'>Save</button>
        <button type="button" id="clearButton" className='btn btn-outline-warning' onClick={resetForm}>Clear</button>
      </form>
    </div>
  );
}

export default Details;
