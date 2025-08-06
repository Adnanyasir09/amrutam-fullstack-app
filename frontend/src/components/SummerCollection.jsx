import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    titleLine1: "Amrutam Kuntal care Hair Spa",
    titleLine2: "Do-it yourself Hair Treatment",
    price: "₹649.00 · 200 ml",
    rating: 5,
    reviews: 52,
    image: "/i7.png",
  },
  {
    id: 2,
    titleLine1: "Amrutam Kuntal Care Herbal Shampoo",
    titleLine2: "Healthy, Natural and Dynamic Hair",
    price: "₹649.00 · 200 ml",
    rating: 5,
    reviews: 52,
    image: "/i8.png",
  },
  {
    id: 3,
    titleLine1: "Amrutam Nari Sondarya Malt",
    titleLine2: "Complete Care For Women's Health & Beauty",
    price: "₹649.00 · 200 ml",
    rating: 5,
    reviews: 52,
    image: "/i9.png",
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="flex space-x-0.5">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.1 3.386a1 1 0 00.95.69h3.564c.969 0 1.371 1.24.588 1.81l-2.883 2.096a1 1 0 00-.364 1.118l1.1 3.386c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.883 2.096c-.784.57-1.838-.197-1.539-1.118l1.1-3.386a1 1 0 00-.364-1.118L3.431 8.813c-.783-.57-.38-1.81.588-1.81h3.564a1 1 0 00.95-.69l1.1-3.386z" />
        </svg>
      ))}
    </div>
  );
};

const ProductCard = ({ titleLine1, titleLine2, price, rating, reviews, image }) => (
  <div className="bg-white rounded-xl shadow-md w-96 p-5 flex flex-col items-center text-center space-y-3">
    <img src={image} alt={titleLine1} className="rounded-lg w-full h-90 object-cover" />
    <div>
      <p className="text-base font-semibold">{titleLine1}</p>
      <p className="text-base font-semibold">{titleLine2}</p>
    </div>
    <p className="text-gray-700 text-sm">{price}</p>
    <div className="flex items-center justify-center gap-1">
      <StarRating count={rating} />
      <span className="text-sm text-gray-600">({reviews})</span>
    </div>
    <button className="w-9 h-9 rounded-full bg-[#e1f3e6] text-green-600 text-xl flex items-center justify-center hover:bg-green-100">+</button>
  </div>
);

const SummerCollection = () => {
  return (
    <div className="bg-[#fff7e6] pt-6 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 pl-2">Summer Collection</h2>
        <div className="flex gap-6 justify-start flex-wrap">
          {products.map((product) => (
            <Link
  key={product.id}
  to={`/product/${product.id}`}
  state={product}
  className="no-underline text-inherit"
>
  <ProductCard {...product} />
</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerCollection;
