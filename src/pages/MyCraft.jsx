import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraft = () => {
  const { user } = useContext(AuthContext);
  const allCrafts = useLoaderData();
  const [userCrafts, setUserCrafts] = useState([]);

  useEffect(() => {
    // Filter user's crafts when allCrafts or user changes
    if (allCrafts && user) {
      const filteredCrafts = allCrafts.filter(
        (craft) => craft.user_email === user.email
      );
      setUserCrafts(filteredCrafts);
    }
  }, [allCrafts, user]);

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

  const handleDelete = (_id) => {
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
            if (data.deletedCount > 0) {
              // Remove the deleted item from userCrafts
              const updatedUserCrafts = userCrafts.filter(
                (craft) => craft._id !== _id
              );
              // Update the state with the new userCrafts
              setUserCrafts(updatedUserCrafts);
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft item has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting craft:", error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the craft.",
              icon: "error",
            });
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
              Update
            </Link>
            <button onClick={() => handleDelete(craft._id)} className="btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
