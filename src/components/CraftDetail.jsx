import { useLoaderData } from "react-router-dom";

const CraftDetail = () => {
  const crafts = useLoaderData();

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
      <h2>detail</h2>
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={item_image}
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500 object-contain dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 dark:bg-gray-50">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {item_name}
              </a>
              <p className="text-xs text-gray-400 dark:text-gray-600">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  Leroy Jenkins
                </a>
              </p>
            </div>
            <div className="text-gray-100 dark:text-gray-800">
              <p>Insert the actual text content here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetail;
