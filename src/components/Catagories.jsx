import { useEffect, useState } from "react";
import Category from "./Category";
import { Typewriter } from "react-simple-typewriter";

const Catagories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="text-center font-bold font-oregano text-2xl text-custom-jute">
        <h2>
          <span className="text-4xl"> Explore Our Categories </span>
          <br /> We Offer :
          <Typewriter
            words={[
              "Wooden Furniture & Sculptures",
              "Wooden Home Decor",
              "Wooden Utensils and Kitchenware",
              "Wooden Utensils and Kitchenware",
              "Jute Home Decor",
              "Jute Kitchenware & utensils",
            ]}
            loop={0}
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={700}
          ></Typewriter>
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 mt-8">
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
