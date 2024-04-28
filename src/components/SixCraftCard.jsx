import { Link } from "react-router-dom";
import Button from "./buttons/Button";

const SixCraftCard = ({ craft }) => {
  const {
    _id,
    item_image,
    item_name,
    processing_time,
    category,
    short_description,
    price,
    rating,
    customization,
    stock_status,
    user_email,
    user_name,
  } = craft;
  return (
    <div className="shadow-md relative p-6 space-y-4 border-2 border-custom-jute">
      <img
        src={item_image}
        className="w-full h-80 object-contain bg-custom-jute"
        alt=""
      />
      <div className="absolute top-2 px-3 py-2 text-sm font-bold text-custom-jute bg-white border border-custom-jute">
        {stock_status}
      </div>
      <h2 className=" text-2xl font-bold text-custom-jute">{item_name}</h2>
      <div className="flex flex-col font-medium space-y-2">
        <span>Rating: {rating}</span>
        <span>Customizable: {customization}</span>
        <span>Preparation Time: {processing_time} days</span>
      </div>
      <p className="text-xl text-custom-jute font-bold">$ {price}</p>
      <Link to={`/craft-detail/${_id}`}>
        <button className="pt-3">
          {" "}
          <Button buttonText="View Details"></Button>
        </button>
      </Link>
    </div>
  );
};

export default SixCraftCard;
