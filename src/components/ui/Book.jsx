import React, {useState, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from './Rating';
import Price from './Price';
import { Link } from 'react-router-dom';

//${book.id} will make the hostname show the id of the book clicked. example: 11

const Book = ({ book }) => {
    const [img,setImg] = useState()

    //when the component mounts we set it to true, visa versa, in the useEffect
    //we set it to false
    //const mountedRef = useRef(true);

    useEffect(() => {
        const image = new Image();
        image.src = book.url;
        image.onload = () => {
            //makes the skeleton loading state last alittle longer
            setTimeout(() => {
                //if its true, set the image
                //if (mountedRef.current){
                    setImg(image)
               // }
            },300)
        }
        //return () => {
            //when the component unmounts
            //when using useRef, always incorporate .current
        //    mountedRef.current = false
       // }
    })

  return (
    <div className = "book">
        {
            //if there is an img, we will render the following code
            img ? (
            
            <>
            
            <Link to = {`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img 
                    src = {img.src} 
                    alt = "" 
                    className = "book__img"/>
                </figure>
            </Link>
            <div className="book__title">
                <Link to = {`/books/${book.id}`} className = "book__title--link">
                    {book.title}
                </Link>
            </div>
            <Rating rating = {book.rating}/>
            <Price salePrice = {book.salePrice} originalPrice = {book.originalPrice}/>
            </>
            
           ) : (
            <>
                <div className="book__img--skeleton"></div>
                <div className="skeleton book__title--skeleton"></div>
                <div className="skeleton book__rating--skeleton"></div>
                <div className="skeleton book__price--skeleton"></div>
            </>
        )}
    </div>
  );
}

//in the book__price div, js was used to figure out if a book either had
//a sale price or not. if there was a sale, print both origional, but crossed out
//and sale price. If not, print the original price of the book

export default Book;
