import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";

const MyCraft = () => {
  const { user } = useContext(AuthContext);
  const allCrafts = useLoaderData();
  const userCrafts = allCrafts.filter(
    (craft) => craft.user_email === user?.email
  );

  //
  const [customizationFilter, setCustomizationFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setCustomizationFilter(filter);
  };

  const filteredCrafts = userCrafts.filter((craft) => {
    if (customizationFilter === "No") {
      return craft.customization === "No";
    } else if (customizationFilter === "Yes") {
      return craft.customization === "Yes";
    } else {
      return true;
    }
  });
  //
  return (
    <div>
      <div>
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("No")}>
          No Customization
        </button>
        <button onClick={() => handleFilterChange("Yes")}>Customization</button>
      </div>
      <div className="">
        {filteredCrafts.map((craft) => (
          <div key={craft._id}>
            <img src={craft.item_image} alt={craft.item_name} />
            <h3>{craft.item_name}</h3>
            <p>Category: {craft.category}</p>
            <p>Description: {craft.short_description}</p>
            <Link to="/update" className="btn">
              {" "}
              Update
            </Link>
            <Link className="btn"> Delete</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
