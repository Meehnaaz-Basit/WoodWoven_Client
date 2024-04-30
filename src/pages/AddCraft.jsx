import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

  const handleAddCraft = (e) => {
    e.preventDefault();
    console.log("add craft");

    const item_image = e.target.item_image.value;
    const item_name = e.target.item_name.value;
    const category = e.target.category.value;
    const short_description = e.target.short_description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const stock_status = e.target.stock_status.value;
    const processing_time = e.target.processing_time.value;
    const user_email = e.target.user_email.value;
    const user_name = e.target.user_name.value;

    const addedCraft = {
      item_image,
      item_name,
      category,
      short_description,
      price,
      rating,
      customization,
      stock_status,
      processing_time,
      user_email,
      user_name,
    };
    console.log(addedCraft);
    // send data to server
    fetch(
      "https://woodwoven-server-lf4syyk49-meehnaazs-projects.vercel.app/allCrafts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addedCraft),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Added!",
          text: "Added Successfully.",
          icon: "success",
        });
      });
    e.target.reset();
  };

  return (
    <div className="py-6">
      <div className="text-center space-y-4 pb-6">
        <h2 className="font-bold  font-oregano text-2xl">
          Welcome <span className="text-custom-jute"> {user.displayName} </span>
        </h2>
        <p className="underline font-figtree  ">Add Your Items</p>
      </div>
      <div className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0">
        <section className="p-6 border-2 border-custom-jute bg-custom-jute">
          <form
            onSubmit={handleAddCraft}
            className="container flex flex-col mx-auto space-y-12 border-2 border-custom-jute p-8 bg-white"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 pb-0 rounded-md shadow-sm">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="item_image" className="text-sm">
                    Item Image Url
                  </label>
                  <input
                    id="item_image"
                    type="text"
                    placeholder="Enter Item Name"
                    name="item_image"
                    className="w-full p-3 border-b-2 border-custom-jute"
                    required
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="item_name" className="text-sm">
                    Item Name
                  </label>
                  <input
                    id="item_name"
                    type="text"
                    placeholder="Enter Item Name"
                    name="item_name"
                    className="w-full p-3 border-b-2 border-custom-jute"
                    required
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="price" className="text-sm">
                    Price
                  </label>
                  <input
                    id="price"
                    type="number"
                    placeholder="Enter the price"
                    name="price"
                    className="w-full p-3 border-b-2 border-custom-jute "
                    required
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="short_description" className="text-sm">
                    Short Description
                  </label>
                  <input
                    id="short_description"
                    type="text"
                    placeholder="Enter Short Description"
                    name="short_description"
                    className="w-full p-3 border-b-2 border-custom-jute "
                    required
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <select
                    className="select w-full border-b-2 border-custom-jute"
                    name="category"
                    required
                  >
                    <option disabled selected>
                      Select a Category
                    </option>
                    <option>Wooden Furniture & Sculptures</option>
                    <option>Wooden Home Decor</option>
                    <option>Wooden Utensils and Kitchenware</option>
                    <option>Jute Home Decor</option>
                    <option>Jute Kitchenware & utensils</option>
                    <option>Jute and wooden jewellery</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <select
                    className="select w-full  border-b-2 border-custom-jute"
                    name="rating"
                    required
                  >
                    <option disabled selected>
                      Rating
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <select
                    className="select w-full border-b-2 border-custom-jute"
                    name="customization"
                    required
                  >
                    <option disabled selected>
                      Customization
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <select
                    className="select w-full border-b-2 border-custom-jute"
                    name="stock_status"
                    required
                  >
                    <option disabled selected>
                      Stock Status
                    </option>
                    <option>In stock</option>
                    <option>Made to Order</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <select
                    className="select w-full border-b-2 border-custom-jute"
                    name="processing_time"
                    required
                  >
                    <option disabled selected>
                      Processing times (days)
                    </option>
                    <option>1-3</option>
                    <option>4-6</option>
                    <option>7-12</option>
                    <option>12-15</option>
                    <option>15-20</option>
                    <option>20-30</option>
                  </select>
                </div>

                <div className="col-span-full sm:col-span-3">
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    className=" w-full p-3 border-b-2 border-custom-jute"
                    disabled
                    defaultValue={user?.email}
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <input
                    id="user_name"
                    type="hidden"
                    disabled
                    name="user_name"
                    defaultValue={user?.displayName}
                  />
                </div>
              </div>
            </fieldset>
            <input
              type="submit"
              className="btn w-full border-2 border-custom-jute bg-custom-jute text-white hover:bg-transparent hover:text-custom-jute hover:border-custom-jute"
              value="Add Items"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddCraft;
