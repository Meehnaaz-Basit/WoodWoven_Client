import { useLoaderData, useParams } from "react-router-dom";

const CraftDetail = () => {
  const crafts = useLoaderData();

  // console.log(crafts);

  const {
    item_image,
    item_name,
    category,
    short_description,
    price,
    rating,
    customization,
    stock_status,
    user_email,
    user_name,
  } = crafts;

  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16  ">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={item_image}
            alt=""
            className="w-full h-60 sm:h-96 object-contain bg-custom-jute"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white border-custom-jute border-4">
            <div className="space-y-2">
              <div className="inline-block text-2xl font-semibold sm:text-3xl">
                <div className="capitalize font-oregano text-3xl font-bold text-custom-jute">
                  {item_name}
                </div>
              </div>
              <p className="text-xs ">By {user_name}</p>
            </div>
            <div className="">
              <div className="italic text-xl">
                <p>{short_description}</p>
                <p className="text-custom-jute font-bold text-2xl mt-4">
                  $ {price}
                </p>
              </div>
              <div className="grid grid-cols-21 gap-4 space-y-4 mt-4 items-center justify-center">
                <p className="font-semibold text-custom-jute">
                  Category:{" "}
                  <span className="font-normal italic text-black">
                    {category}
                  </span>
                </p>
                <p className="font-semibold text-custom-jute">
                  Rating:{" "}
                  <span className="font-normal italic text-black">
                    {rating}
                  </span>
                </p>
                <p className="font-semibold text-custom-jute">
                  Customizable:{" "}
                  <span className="font-normal italic text-black">
                    {customization}
                  </span>
                </p>
                <p className="font-semibold text-custom-jute">
                  Stock Status:{" "}
                  <span className="font-normal italic text-black">
                    {" "}
                    {stock_status}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetail;
