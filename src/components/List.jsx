import React from 'react';

const List = ({ books, handleDelete, handleItemClick }) => {

  return (
    <div className="content-list">
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => handleItemClick(book)}>
            <p className="id">{book.id}</p>
            <p className="field1">{book.title}</p>
            <p className="field2">{book.author}</p>
            <p className="field3">{book.isbn}</p>
            <p className="field4">{book.price}</p>
            <p className="field5">{book.publicationDate}</p>
            <button className="deleteButton" onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
