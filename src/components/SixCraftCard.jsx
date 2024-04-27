import { Link } from "react-router-dom";

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
    <div>
      <img src={item_image} className="w-48" alt="" />
      <h2>card for home{item_name}</h2>
      <Link to={`/craft-detail/${_id}`} className="btn">
        View Details
      </Link>
    </div>
  );
};

export default SixCraftCard;
