//import { Router } from 'express';
import React, { useState } from 'react';
//import { Redirect } from 'react-router-dom';
//import { NavLink, Router as route  } from 'react-router-dom'
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const addToCart = (product) => {
    setCart([...cart,{ ...product }]);
  };
  
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  }
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }
  
  const [products] = useState([
    {
      name:'Bread Butter jam',
      cost: 25,
      image:'https://ratlamee.com/wp-content/uploads/2018/10/Bread-Butter-Jam-1.jpg',
    },
    {
      name:'Vegtoast Sandwich',
      cost: 40,
      image:'https://5.imimg.com/data5/TJ/WS/GLADMIN-2083642/sandwich-500x500.png',
    },
    {
      name:'Corn Chilli Cheese Sandwich',
      cost: 70,
      image:'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/pooja/Corn_And_Capsicum_Sandwich_Recipe.jpg',
    },
    {
      name:'Panner masala cheese Sandwich',
      cost: 80,
      image:'https://www.ruchikrandhap.com/wp-content/uploads/2017/09/Paneer-Corn-Spinach-Sandwich-4-1-1024x643.jpg',
    },
    {
      name:'Apple MilkShake',
      cost: 60,
      image:'https://cdn.cdnparenting.com/articles/2020/01/19152425/Apple-Milkshake-Recipe.jpg',
    },
    {
      name:'Badam MilkShake',
      cost: 80,
      image:'https://i2.wp.com/gospicy.net/wp-content/uploads/2019/03/badam-milk-recipe.jpg?fit=400%2C267&ssl=1',
    },
    {
      name:'Pista MilkShake',
      cost: 80,
      image:'https://images-na.ssl-images-amazon.com/images/I/21LvRo2UyXL.jpg',
    },
    {
      name:'Mango MilkShake',
      cost: 80,
      image:'https://www.healthyfanz.com/wp-content/uploads/2019/09/mango-milkshake-recipe-800x550.jpg',
    },
    {
      name:'Veg Noodles',
      cost: 45,
      image:'https://www.mozismenu.com/wp-content/uploads/2017/07/Veg-Hakka-Noodles-0-750x500.jpg',
    },
    {
      name:'Egg Noodles',
      cost: 60,
      image:'https://c.ndtvimg.com/2020-07/vmcdt00g_noodle_120x90_06_July_20.jpg',
    },
    {
      name:'Veg Manchurian',
      cost: 60,
      image:'https://i2.wp.com/vegecravings.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg?fit=2412%2C1944&quality=65&strip=all&ssl=1',
    },
    {
      name:'Panner Manchurian',
      cost: 90,
      image:'https://d3aew4oo17ml6.cloudfront.net/images/photos/thumbnailfull/photos-2014-5-30-9-30-35.jpg?v=1.1.0',
    },
  ])
  const totalPrice = cart.reduce((acc, cur) =>acc + cur.cost, 0);
  const renderProducts = () => (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
         <div className="product" key={idx}>
          
          <h2 style={{color:'#ffffff'}}>{product.name}</h2>
          
          <img src = {product.image} alt = "product.name" width = '250' height = "240"/>
          <h3 style={{color:'#ffffff'}}>{product.cost}</h3>
          
          <button onClick={() => addToCart(product)}>Add to cart</button>
          
         </div>
        ))}
      </div>
    </>
  ); 
  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
            <h1 style = {{color:'#ffd11a'}}><i>NO OF ITEMS IN THE CART:{cart.length}</i></h1>
            <h1 style = {{color:'#ffd11a'}}><i>TOTAL PRICE: {totalPrice}</i></h1>
        {cart.map((product, idx) => (
         <div className="product" key={idx}>
          
          <h2 style={{color:'#00e64d'}} >{product.name}</h2>
          
          <img src = {product.image} alt = "product.name" width = '250' height = "240"/>
          <h3 style={{color:'#80ff80'}} >{product.cost}</h3>
          <button onClick={() => removeFromCart(product)}>Remove From Product</button>      
          </div>
        ))}
      </div>
    </>
  ); 

  /*
  const function redirect() {
    <Redirect to="http:localhost:3000"></Redirect>
  }*/

  return( 
  <div className="App">
    <header>
      <h1 align = "center">
      <button onClick={() => navigateTo(PAGE_CART)}>GO TO CART ({cart.length}) </button>
      <button onClick={() => navigateTo(PAGE_PRODUCTS)}>VIEW PRODUCTS </button>
      <button><a href="http://localhost:3000">Back</a></button>
      </h1>
    
    </header>
    {page === PAGE_PRODUCTS && renderProducts()}
    {page === PAGE_CART && renderCart()}
  </div>
  );
}

export default App;
