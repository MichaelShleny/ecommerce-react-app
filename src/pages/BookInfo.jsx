import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import Book from '../components/ui/Book';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';

//adding in addToCart function aswell as we passed it in App.js
const BookInfo = ({books, addToCart, cart}) => {
    const { id } = useParams();
    //stackoverflow - add + signs before to make them both numbers compare
    const book = books.find((book) => +book.id === +id)
    const [added,setAdded] = useState(false);

    function addBookToCart(book){
        setAdded(true)
        addToCart(book)
    }
    //can use this instead of the added state, no need for me
    function bookExistsOnCart() {
        //find a book where the book id is equal to the parameter on the page
        return cart.find((book) => book.id === +id)
    }

    return (
        <div id = "books__body">
            <main id="books__main" >
                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <Link to = "/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left"/>
                            </Link>
                            <Link to ="/books" className="book__link">
                                <h2 className="book__selected--title--top" >Books</h2>
                            </Link>
                        </div>
                        <div className = "book__selected">
                            <figure className = "book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>
                            <div className = "book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating = {book.rating} />
                                <div className="books__selected--price">
                                    <Price originalPrice = {book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <div className="book__summary--title">Summary</div>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Animi ipsam, et soluta
                                        tenetur ullam exercitationem. Recusandae
                                        iure dolorem, distinctio odit voluptas 
                                        laudantium officia aperiam itaque labore,
                                        praesentium fugiat, error repellendus?
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Animi ipsam, et soluta
                                        tenetur ullam exercitationem. Recusandae
                                        iure dolorem, distinctio odit voluptas 
                                        laudantium officia aperiam itaque labore,
                                        praesentium fugiat, error repellendus?
                                    </p>
                                </div>
                                {
                                    //if the book exists on the cart, checkout, if not -> add book
                                    added ? (
                                    <Link to={`/cart`} className="book__link">
                                        <button className="btn">Checkout</button>
                                    </Link>  
                                    ) : ( 
                                        <button className="btn" onClick={() => addBookToCart(book)}>
                                            Add to cart
                                        </button>
                                    )
                                } 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Reccomended Books
                            </h2>
                        </div>
                        <div className="books">
                            {books
                                .filter(book => book.rating === 5 && +book.id !== +id)
                                .slice(0,4)
                                .map(book => <Book book = {book} key = {book.id} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;
