import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductCard = ({ filter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const exchangePrice = useSelector((store) => store.price);

  useEffect(() => {
    fetchProducts(filter);
  }, [filter]);

  const fetchProducts = (filter) => {
    const apiUrl = process.env.REACT_APP_API_URL || "";
    fetch(`${apiUrl}/category/${filter}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
      })
      .catch((err) => console.log("Error fetching category:", err));
  };
  return (
    <div>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 lg:gap-8 pb-8 mx-6 lg:mx-20 justify-around md:justify-center">
          {products.map((item) => (
            <Link to={"/products/" + item._id} key={item._id}>
              <div
                key={item._id}
                className="w-40 md:w-80 border border-gray-50 shadow-lg flex flex-col rounded-xl md:rounded-3xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <div className="h-48 md:h-64 p-1 sm:p-3">
                  <img
                    className="object-contain w-full h-full rounded-xl md:rounded-3xl"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div className="px-2 sm:px-4 flex-grow">
                    <div className="flex justify-between items-center py-1">
                      <p className="hidden md:block text-gray-500 md:text-lg text-xs overflow-hidden whitespace-nowrap text-ellipsis">
                        {item.category}
                      </p>
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          className="text-app-yellow"
                          icon={faStar}
                        />
                        <p className="md:text-lg text-xs font-semibold md:px-2 px-1">
                          {item.rating.rate} ({item.rating.count}+)
                        </p>
                      </div>
                    </div>
                    <h1 className="py-1 md:py-2 font-semibold text-sm sm:text-md md:text-xl overflow-hidden whitespace-nowrap text-ellipsis">
                      {item.title}
                    </h1>
                  </div>
                  <div className="px-2 sm:px-4 pb-2 md:pb-4">
                    <h2 className="font-semibold text-md sm:text-xl md:text-2xl">
                      {(item.price * exchangePrice.price).toLocaleString(
                        "en-IN",
                        {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }
                      )}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductCard;
