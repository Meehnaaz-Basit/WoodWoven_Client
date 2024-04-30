import { Link } from "react-router-dom";
import Button from "./buttons/Button";

const CraftCard = ({ craft, serialNumber }) => {
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
    <>
      <tr>
        <th>{serialNumber}</th>
        <td>{item_name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>
          <p>{user_name}</p>
          <p>{user_email}</p>
        </td>
        <td>
          <Link to={`/craft-detail/${_id}`}>
            <button>
              <Button buttonText="View Details"></Button>
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default CraftCard;
