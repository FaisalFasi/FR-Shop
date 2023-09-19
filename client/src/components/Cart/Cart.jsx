import { loadStripe } from "@stripe/stripe-js";
import makeRequest from "../../makeRequest";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [orderHasItems, setOrderHasItems] = useState(false);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51NgTlNLMYb3slf8ZwSq1g65zBPhFQNxRBiuufqgTcJ4f6fZOzCNslLnqhiaPPFuzzO11robVAFPg9W2rRRybdOrG00sloUrLGu"
  );
  useEffect(() => {
    if (products.length > 0) {
      setOrderHasItems(true);
      console.log(products.length);
    } else {
      setOrderHasItems(false);
      console.log(products.length);
    }
  }, [products]);

  const handlePayment = async () => {
    if (orderHasItems) {
      try {
        const stripe = await stripePromise;

        const res = await makeRequest.post("/orders", {
          products,
        });
        console.log(res);
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img
            src={process.env.REACT_APP_MEDIA_URL + item.img}
            alt="clothe image"
          />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlineOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      {!orderHasItems && <div>Please add a product to order</div>}
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
