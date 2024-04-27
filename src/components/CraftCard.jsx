import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
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
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={item_image} className="w-60" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <p>{short_description}</p>
          <div className="card-actions justify-end">
            <Link to={`/craft-detail/${_id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
