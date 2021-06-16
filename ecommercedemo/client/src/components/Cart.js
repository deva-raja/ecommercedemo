import React, { useEffect, useState } from 'react';
import { showCartProduct } from '../api/ProductApi';
import CartCardComponent from './CartCardComponent';

function Cart({ cartProducts }) {
  const [cartProductsArray, setCartProductsArray] = useState([]);

  useEffect(() => {
    async function getData() {
      const product = await showCartProduct(cartProducts);
      console.log(product);
      setCartProductsArray(product.product);
    }
    getData();
  }, [cartProducts]);

  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 col-11">

            <div class="card p-4 my-3 border">
              <h3 class="">Shopping Cart </h3>

              <hr class="new1"></hr>
      {cartProductsArray.length !== 0 &&
        cartProductsArray.map((cartProduct, index) => (
          <CartCardComponent key={index} cartProduct={cartProduct} />
        ))}
        </div>
        </div>
        </div>
        </div>

      <div className="col-md-3 col-6">
        <div className="card p-4 my-3 border">
          <h5 id="rows-2">Price Details</h5>
          <hr className="new1"></hr>
          <table>
            <tr>
              <td>Price</td>
              <td id="fp">0</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td id="fd">0</td>
            </tr>
            <tr>
              <td>Delivery Charge</td>
              <td id="fdel">0</td>
            </tr>
            <tr>
              <td id="tot"><strong>Total Amount</strong></td>
              <td id="ft">0</td>
            </tr>

          </table>


          <hr className="new1"></hr>
          <div className="d-grid gap-4 col-10 mx-auto">
              
            <button className="btn btn-warning" type="button">Place the order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
