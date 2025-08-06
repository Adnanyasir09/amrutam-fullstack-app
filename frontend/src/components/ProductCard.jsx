import { Link } from "react-router-dom";

const ProductCard = ({ title, price }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Make sure f1.jpg is in the /public folder */}
      <img src="/f1.jpg" alt={title} className="w-full h-56 object-cover" />

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-green-700 font-bold text-sm mb-1">₹{price}</p>
        <div className="text-yellow-500 text-xs">⭐⭐⭐⭐☆</div>
        {/* Example use of Link if needed */}
        {/* <Link to={`/product/${id}`} className="text-blue-500 text-xs mt-1 block hover:underline">View Details</Link> */}
      </div>
    </div>
  );
};

export default ProductCard;
