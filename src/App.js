import './index.css'
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data'
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {
  const [cart,setCart] = useState([]);

  //using hooks with arrays - we need to pass it in a new array (our array is books)

  function addToCart(book){
    setCart([...cart,{...book, quantity: 1}])
  }

  function changeQuantity(book, quantity){
    //in order to change a quantity we pass in the map in setCart
    //we are looping through every item in cart -> if item.id is equal to book.id (we are looping over every)
    //single item in the cart and if it is the right book we are
    //wrking with then we update the quantity of that book
    //* we get the quantity from event.target.value in Cart.jsx
    //the first argument is a book we know we are working with 
    //if we are suposed to change it, lets change it. otherwise just return the same item from the cart
    setCart(cart.map(item =>{
      if (item.id === book.id){
        return {
          ...item,
          quantity: +quantity,
        }
      }
      else{
        return item
      }
    }))
  }

  function removeItem(item) {
    //keep it in the array if the id dont match
    setCart(cart.filter(book => book.id !== item.id))
}

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item => {
      counter +=item.quantity
    })
    return counter
  }
  //call the console log when the cart changes [cart]
  useEffect(() => {
     console.log(cart);
  }, [cart])
//when we want to call the return of a function, put () after the call
//as the example for numberofItems()
  return (
    <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()} />
      <Route path="/" exact component={Home}/>
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id" render ={() => <BookInfo books={books} addToCart={addToCart} />} />
      <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
