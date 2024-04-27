import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraft = () => {
  const { user } = useContext(AuthContext);
  const allCrafts = useLoaderData();
  const userCrafts = allCrafts.filter(
    (craft) => craft.user_email === user?.email
  );
  const [myCrafts, setMyCrafts] = useState(userCrafts);
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
  const handleDelete = (_id) => {
    console.log("delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allCrafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.detetedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft item has been deleted.",
                icon: "success",
              });
            }
            const remainingMyCrafts = myCrafts.filter(
              (craft) => craft._id !== _id
            );
            setMyCrafts(remainingMyCrafts);
          });
      }
    });
  };
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
            <button onClick={() => handleDelete(craft._id)} className="btn">
              {" "}
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
