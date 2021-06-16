import React, { useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import ProductBodyComponent from './components/ProductBodyComponent';
import MyProductBodyComponent from './components/MyProductBodyComponent'
import AddProduct from './components/AddProduct'
import Login from './components/Login';
import AddSeller from './components/AddSeller';
import About from './components/About';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import SellerSignup from './components/SellerSignup';
import SellerBodyComponent from './components/SellerBodyComponent';
import SingleProductComponent from './components/SingleProductComponent';

function App() {
  const [sellerId, setSellerId] = useState();
  const [productId, setProductId] = useState();
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <Router>
      <div className='App'>
        <NavbarComponent setCartProducts={setCartProducts} cartProducts={cartProducts} />
        <Switch>
          <Route exact path='/seller'>
            <SellerBodyComponent setSellerId={setSellerId} />
          </Route>
          <Route exact path='/product'>
            <ProductBodyComponent sellerId={sellerId} setProductId={setProductId} />
          </Route>
          
        <Route exact path='/addproduct'>
          <AddProduct sellerId={sellerId} setProductId={setProductId} />
        </Route>
          <Route exact path='/myproduct'>
            <MyProductBodyComponent sellerId={sellerId} setProductId={setProductId} />
          </Route>
          <Route exact path='/productItem'>
            <SingleProductComponent productId={productId} setCartProducts={setCartProducts} />
          </Route>
          <Route exact path='/cart'>
            <Cart cartProducts={cartProducts} />
          </Route>
          <Route exact path='/'>
            <Login client='USER' sellerId={sellerId} />
            {/* <Login client='SELLER ' /> */}
          </Route>
          <Route exact path='/sellerlogin'>
            <Login client='SELLER' />
          </Route>
          <Route exact path='/signup'>
            <Signup sellerId={sellerId} />
          </Route>
          <Route exact path='/addseller'>
            <AddSeller sellerId={sellerId} />
          </Route>
          <Route exact path='/sellersignup'>
            <SellerSignup sellerId={sellerId} />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
