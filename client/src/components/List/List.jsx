import React from "react";
import "./List.scss";
import Card from "../Card/Card";
const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80",
      img2: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
      isNew: true,
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/gorgeous-young-brunette-with-red-lips-tattoo-body-sexy-green-silk-dress-black-jacket-bag-trendy-sunglasses-standing-outdoors-against-old-city-architecture_197531-28179.jpg?size=626&ext=jpg&ga=GA1.2.1121964307.1691567313&semt=sph",
      img2: "https://img.freepik.com/free-photo/cute-young-girl-with-dark-wavy-hairstyle-bright-makeup-silk-dress-black-jacket-holding-sunglasses-hands-looking-away-against-beige-building-wall_197531-24462.jpg?size=626&ext=jpg&ga=GA1.2.1121964307.1691567313&semt=sph",
      title: "Shirt",
      oldPrice: 29,
      price: 20,
      isNew: true,
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/young-beautiful-stylish-woman-walking-pink-coat_1153-3487.jpg?w=740&t=st=1691568103~exp=1691568703~hmac=59c91838570a3544f7666062d5a3c6a5d508bdbe2e05ef333910716738eaa263",
      img2: "https://img.freepik.com/premium-photo/model-girl-leopard-print-midi-skirt-black-blouse-posing_179135-1477.jpg?size=626&ext=jpg&ga=GA1.2.1121964307.1691567313&semt=sph",

      title: "Shoes",
      oldPrice: 59,
      price: 45,
      isNew: false,
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/adorable-woman-expressing-true-positive-emotions-during-photoshoot-purple-fur-coat_197531-7081.jpg?w=996&t=st=1691568148~exp=1691568748~hmac=eaf31a3686ae5553a966b76e981e3865e0a08bd75e21d5b37da85cedc4928585",
      img2: "https://img.freepik.com/free-photo/beautiful-woman-with-long-blonde-hair-travelling_1303-26401.jpg?w=740&t=st=1691568184~exp=1691568784~hmac=3498261e15da7db1280fe2bb23f5c1fd6420267cfeb53c0207197d3f33e96a96",

      title: "Handbag",
      oldPrice: 39,
      price: 28,
      isNew: false,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
