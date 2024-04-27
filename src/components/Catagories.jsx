import { useEffect, useState } from "react";
import Category from "./Category";

const Catagories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2>categories{categories.length}</h2>
      <div className="grid lg:grid-cols-3">
        {categories.map((eachCategory) => (
          <Category
            key={eachCategory._id}
            eachCategory={eachCategory}
          ></Category>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
