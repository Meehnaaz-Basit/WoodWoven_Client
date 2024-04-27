import { Link } from "react-router-dom";

const Category = ({ eachCategory }) => {
  const { category, category_image } = eachCategory;
  return (
    <Link to="">
      <div className="relative">
        <img src={category_image} alt="" />
        <div className="absolute top-0">
          <h1 className="text-white font-bold text-3xl">{category}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Category;
