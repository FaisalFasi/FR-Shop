import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
const FeaturedProducts = ({ type }) => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/products`, // Use template literals for URL
  //         {
  //           headers: {
  //             Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`, // Add a space after "Bearer"
  //           },
  //         }
  //       );
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} Products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
          molestias reprehenderit quidem deleniti eveniet minima, nostrum magni
          sapiente rerum, pariatur ducimus fuga saepe similique, quaerat fugiat
          dolorem soluta repellat inventore!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "something went wrong!"
          : loading
          ? "Loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
