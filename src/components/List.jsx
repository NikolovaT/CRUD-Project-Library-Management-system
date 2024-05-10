import React from 'react';

const List = ({ books, handleDelete, handleItemClick }) => {

  return (
    <div className="content-list">
      <div>
        <ul className='list-unstyled'>
          {books.map(book => (
            <li key={book.id} onClick={() => handleItemClick(book)} className='card border-info mb-5 px-5 '>
              <p className="id btn btn-info disabled">{book.id}</p>
              <h2 className="field1 card-title">{book.title}</h2>
              <p className="field2">{book.author}</p>
              <p className="field3">ISBN: {book.isbn}</p>
              <p className="field4">{book.price}$</p>
              <p className="field5 text-body-tertiary">{book.publicationDate}</p>
              <button className="deleteButton btn btn-outline-danger" onClick={() => handleDelete(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
