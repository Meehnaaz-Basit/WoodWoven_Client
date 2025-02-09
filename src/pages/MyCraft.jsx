import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/buttons/Button";

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
        fetch(`https://woodwoven-server.vercel.app/allCrafts/${_id}`, {
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
              // setUserCrafts(updatedUserCrafts);
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft item has been deleted.",
                icon: "success",
              });
              setUserCrafts(updatedUserCrafts);
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
    <div className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0 py-8">
      {/*  */}
      <div className="mb-8">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-custom-jute text-white"
          >
            Filter by Customization
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                {" "}
                <button onClick={() => handleFilterChange("All")}>
                  All
                </button>{" "}
              </a>
            </li>
            <li>
              <a>
                {" "}
                <button onClick={() => handleFilterChange("No")}>
                  No Customization
                </button>
              </a>
            </li>
            <li>
              <a>
                <button onClick={() => handleFilterChange("Yes")}>
                  Customization
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*  */}

      {/* <div>
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("No")}>
          No Customization
        </button>
        <button onClick={() => handleFilterChange("Yes")}>Customization</button>
      </div> */}
      <div className="grid lg:grid-cols-3 gap-6">
        {filteredCrafts.length === 0 ? (
          <p className="inset-0 flex justify-center items-center">
            No items to show.
          </p>
        ) : (
          filteredCrafts.map((craft) => (
            <div key={craft._id}>
              <div className="relative shadow-md p-6">
                <div>
                  <img
                    src={craft.item_image}
                    alt={craft.item_name}
                    className="w-full h-64 object-contain bg-custom-jute"
                  />
                </div>
                <div className="absolute top-6 px-3 py-2 text-sm font-bold text-custom-jute bg-white border border-custom-jute">
                  {craft.stock_status}
                </div>

                <h2 className=" text-2xl font-bold text-custom-jute">
                  {craft.item_name}
                </h2>
                <div className="flex items-center gap-4 font-semibold">
                  <span>Rating: {craft.rating}</span>
                  <span>Customizable: {craft.customization}</span>
                </div>
                <h2 className=" text-xl font-bold text-custom-jute">
                  Price : $ {craft.price}
                </h2>
                <div className="flex justify-between p-4">
                  <Link to={`/update/${craft._id}`}>
                    <button>
                      {" "}
                      <Button buttonText="Update"></Button>{" "}
                    </button>
                  </Link>
                  <button onClick={() => handleDelete(craft._id)}>
                    <button>
                      {" "}
                      <Button buttonText="Delete"></Button>{" "}
                    </button>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyCraft;
