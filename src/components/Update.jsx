import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Update = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>update</h1>
      <section className="p-6">
        <form
          //   onSubmit={handleAddCraft}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
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
                  className="w-full p-3 rounded-md"
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
                  className="w-full p-3 rounded-md"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <select
                  className="select w-full max-w-xs"
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
                <label htmlFor="short_description" className="text-sm">
                  Short Description
                </label>
                <input
                  id="short_description"
                  type="text"
                  placeholder="Enter Short Description"
                  name="short_description"
                  className="w-full p-3 rounded-md "
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
                  className="w-full p-3 rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <select
                  className="select w-full max-w-xs"
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
                  className="select w-full max-w-xs"
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
                  className="select w-full max-w-xs"
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
                <input
                  id="user_email"
                  type="hidden"
                  name="user_email"
                  defaultValue={user?.email}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  id="user_name"
                  type="hidden"
                  name="user_name"
                  defaultValue={user?.displayName}
                />
              </div>
            </div>
          </fieldset>
          <input type="submit" className="btn w-full" value="Add Coffee" />
        </form>
      </section>
    </div>
  );
};

export default Update;
