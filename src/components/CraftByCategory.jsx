import { Link, useLoaderData, useParams } from "react-router-dom";
import Button from "./buttons/Button";

const CraftByCategory = () => {
  const { category } = useParams();
  const allCrafts = useLoaderData();
  //   console.log("craftByCategory", allCrafts);
  // const [craftByCategory, setCraftByCategory] = useState(allCrafts);

  const craftByCategory = allCrafts.filter(
    (craft) => craft.category === category
  );

  return (
    <div className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0 pt-12">
      <h2 className="font-oregano font-bold text-3xl text-center">
        Crafts category:
        <span className="text-custom-jute"> {category} </span>
      </h2>
      {/* Render craftByCategory */}
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {craftByCategory.map((craft) => (
          <div key={craft._id}>
            <div className=" mt-8 shadow-md p-6">
              <div>
                <img
                  className="w-full h-60 bg-custom-jute object-contain"
                  src={craft.item_image}
                  alt=""
                />
              </div>
              <div className="font-semibold space-y-3 mt-3">
                <h1 className="font-oregano text-2xl font-bold text-custom-jute capitalize">
                  {craft.item_name}
                </h1>
                <p>Description: {craft.short_description}</p>
                <p>Subcategory: {craft.subcategory_Name}</p>
                <div>
                  <span>Rating: {craft.rating}</span>
                  <span>Processing Time: {craft.processing_time}</span>
                </div>
                <h2>Price: ${craft.price}</h2>
                <div>
                  <Link to={`/allCraftsDetail/${craft._id}`}>
                    <button>
                      <Button buttonText="View Detail"></Button>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftByCategory;
