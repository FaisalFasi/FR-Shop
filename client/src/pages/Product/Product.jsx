import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const id = useParams().id;
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const uploadUrl = process.env.REACT_APP_UPLOAD_URL;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          {data?.attributes?.img && (
            <img
              src={`${uploadUrl}${data.attributes.img.data.attributes.url}`}
              alt=""
              onClick={() => setSelectedImg("img")}
            />
          )}
          {data?.attributes?.img2 && (
            <img
              src={`${uploadUrl}${data.attributes.img2.data.attributes.url}`}
              alt=""
              onClick={() => setSelectedImg("img2")}
            />
          )}
        </div>
        <div className="mainImg">
          {data?.attributes?.[selectedImg] && (
            <img
              src={`${uploadUrl}${data.attributes[selectedImg].data.attributes.url}`}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">${data?.attributes?.price || 0}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev >= 1 ? prev - 1 : 0))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: `${uploadUrl}${data.attributes.img.data.attributes.url}`,
                quantity,
              })
            )
          }
        >
          <AddShoppingCartIcon className="cursor-pointer" /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

// import React, { useState } from "react";
// import "./Product.scss";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import BalanceIcon from "@mui/icons-material/Balance";
// import useFetch from "../../hooks/useFetch";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartReducer";

// const Product = () => {
//   const [selectedImg, setSelectedImg] = useState("img");
//   const [quantity, setQuantity] = useState(1);

//   const id = useParams().id;
//   const dispatch = useDispatch();

//   const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
//   if (loading) {
//     return "Loading...";
//   }
//   console.log(data);

//   if (error) {
//     return `Error: ${error.message}`;
//   }
//   console.log(process.env.REACT_APP_UPLOAD_URL + "/api/products");
//   const imageUrl1 = `${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img?.data?.attributes?.url}`;
//   const imageUrl2 = `${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img2?.data?.attributes?.url}`;

//   return (
//     <div className="product">
//       {loading ? (
//         "Loading!"
//       ) : (
//         <>
//           <div className="left">
//             <div className="images">
//               <img
//                 src={
//                   process.env.REACT_APP_UPLOAD_URL +
//                   data?.attributes?.img?.data?.attributes?.url
//                 }
//                 alt=""
//                 onClick={() => setSelectedImg("img")}
//               />
//               <img
//                 src={
//                   process.env.REACT_APP_UPLOAD_URL +
//                   data?.attributes?.img2?.data?.attributes?.url
//                 }
//                 alt=""
//                 onClick={() => setSelectedImg("img2")}
//               />
//             </div>
//             <div className="mainImg">
//               {data && data.attributes && data.attributes.img && (
//                 <img
//                   src={
//                     process.env.REACT_APP_UPLOAD_URL +
//                     data.attributes[selectedImg].data.attributes.url
//                   }
//                   alt=""
//                 />
//               )}
//             </div>
//           </div>
//           <div className="right">
//             <h1>Title</h1>
//             <span className="price">$199</span>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
//               animi veritatis sequi porro, tenetur ex cum repellendus delectus,
//               voluptas asperiores voluptatem hic tempore nam, tempora minus
//               temporibus inventore quia ullam quidem dignissimos corrupti? Magni
//               architecto,
//             </p>
//             <div className="quantity">
//               <button
//                 onClick={() =>
//                   setQuantity((prev) => (prev >= 1 ? prev - 1 : 0))
//                 }
//               >
//                 -
//               </button>
//               {quantity}
//               <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
//             </div>
//             <button
//               className="add"
//               onClick={() =>
//                 dispatch(
//                   addToCart({
//                     id: data.id,
//                     title: data.attributes.title,
//                     desc: data.attributes.desc,
//                     price: data.attributes.price,
//                     img: data.attributes.img.data.attributes.url,
//                     quantity,
//                   })
//                 )
//               }
//             >
//               <AddShoppingCartIcon className=" cursor-pointer" /> ADD TO CARD
//             </button>
//             <div className="links">
//               <div className="item">
//                 <FavoriteBorderIcon /> ADD TO WISH LIST
//               </div>
//               <div className="item">
//                 <BalanceIcon /> ADD TO COMPARE
//               </div>
//             </div>
//             <div className="info">
//               <span>Vender: Polo</span>
//               <span>Product type: T-Shirt</span>
//               <span>Tag: T-Shirt, Women, Top</span>
//             </div>
//             <hr />
//             <div className="info">
//               <span>DESCRIPTION</span>
//               <hr />
//               <span>ADDITIONAL INFORMATION</span>
//               <hr />
//               <span>FAQ</span>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Product;
