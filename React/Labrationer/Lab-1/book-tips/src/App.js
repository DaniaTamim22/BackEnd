import './App.css';
import Book from './components/Book';
import { useState } from 'react';

const App = () => {


  const books = useState([
    {
      id: 1,
      title: 'Book title 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa ipsum voluptate eligendi reprehenderit incidunt aliquid atque temporibus cumque consequatur.'
    },
    {
      id: 2,
      title: 'Book title 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa ipsum voluptate eligendi reprehenderit incidunt aliquid atque temporibus cumque consequatur.'
    },
    {
      id: 3,
      title: 'Book title 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa ipsum voluptate eligendi reprehenderit incidunt aliquid atque temporibus cumque consequatur.'
    }
  ]
  )


  return (
    <div className="container">

      {books.map(book => (
        <Book key={book.id} title={book.title} body={book.body} />
      ))}


    </div>
  )
}

export default App;
