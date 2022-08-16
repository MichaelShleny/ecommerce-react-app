import React from 'react';
import Book from './ui/Book';
import { books } from '../data'

const Featured = () => {
    //the filter and slice function filters the first four 5 star rated books
    return (
        <section id = "features">
            <div className = "container">
              <div className = "row">
                <h2 className = "section__title"> 
                    Featured <span className = "purple">Books</span>
                </h2>
                <div className = "books">
                    {books
                        .filter((book) => book.rating === 5)
                        .slice(0,4)
                        .map((book) => (
                            //passing book as a prop which is accepted in the book function
                            <Book book={book} key = {book.id}/>
                    ))}
                </div>
              </div>
            </div>
        </section>
    );
}

export default Featured;

