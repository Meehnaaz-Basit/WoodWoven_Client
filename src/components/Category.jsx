import { useState } from "react";
import { Link } from "react-router-dom";

const Category = ({ eachCategory }) => {
  const { category, category_image } = eachCategory;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={`/categories/${category}`}>
      <div
        className="relative overflow-hidden "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className=" transform transition-transform duration-300 hover:scale-125">
          <img
            src={category_image}
            alt=""
            className="w-full h-auto hover:scale-125"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-custom-jute bg-opacity-60 text-opacity-50 hover:bg-opacity-30 transition-all duration-300">
            <h1 className="text-white font-bold text-xl top-1/2 transform -translate-y-1/2">
              {category}
            </h1>
            {isHovered && (
              <p className="text-white font-bold absolute mt-8">View All</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
