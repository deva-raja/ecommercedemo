function CartCardComponent({ cartProduct }) {
  // will get all product details from cardProduct
    const mystyle = {
        width: 30 , height: 300 ,
      float: "left", position: "absolute"
    };
  return (
                    <div>
          <input type="checkbox" value="" ></input>
                    <small>select all items </small>

                    <div className="productdet">
                    <span><img src={cartProduct.img} width="200" height="200" style ={{mystyle}}
                            alt="nivea mens facewash"></img></span>
                        <span><h5 className="mb-2 heading"> {cartProduct.name}</h5>
                        <p className="mb-1" id="stock">{cartProduct.details}</p>
                        <p className="mb-1">Free shipping</p>
                        <p className="mb-1">Size :<b>100gm</b></p>
                        <span className="mb-1">Price: $<b id="disc-pri">{cartProduct.price}</b></span>
                        </span>
                        
                        <div className="mb-1 py-3" id="bx-2">
                            <button type="button" class="roundbutton" id="dec">-</button>
                            <input id="qnty" type="text" value=""></input>
                            <button type="button" class="roundbutton" id="inc">+</button>
                        </div>
                        <nav className="chng">
                            <a href="">Remove</a>
                            <a href="">Save for later</a>
                        </nav>
              <hr className="new1"></hr>

                    </div>
                </div>
     
  );
}

export default CartCardComponent;
