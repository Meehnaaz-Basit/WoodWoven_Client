import { Link } from "react-router-dom";
import Button from "./buttons/Button";

const SixCraftCard = ({ craft }) => {
  const {
    _id,
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
  } = craft;
  return (
    <div className="">
      <img src={item_image} className="w-48" alt="" />
      <h2>{item_name}</h2>
      <p>{category}</p>
      <p>$ {price}</p>
      <Link to={`/craft-detail/${_id}`}>
        <button>
          {" "}
          <Button buttonText="View Details"></Button>
        </button>
      </Link>
    </div>
  );
};

export default SixCraftCard;
