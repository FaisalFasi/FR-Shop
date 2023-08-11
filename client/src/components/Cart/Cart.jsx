import React from "react";
import "./Cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80",
      img2: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Skirt",
      desc: "This item is very good",
      oldPrice: 19,
      price: 12,
      isNew: true,
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/gorgeous-young-brunette-with-red-lips-tattoo-body-sexy-green-silk-dress-black-jacket-bag-trendy-sunglasses-standing-outdoors-against-old-city-architecture_197531-28179.jpg?size=626&ext=jpg&ga=GA1.2.1121964307.1691567313&semt=sph",
      img2: "https://img.freepik.com/free-photo/cute-young-girl-with-dark-wavy-hairstyle-bright-makeup-silk-dress-black-jacket-holding-sunglasses-hands-looking-away-against-beige-building-wall_197531-24462.jpg?size=626&ext=jpg&ga=GA1.2.1121964307.1691567313&semt=sph",
      title: "Shirt",
      desc: "This item is very good",
      oldPrice: 29,
      price: 20,
      isNew: true,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="delete" />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
