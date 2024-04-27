import { useLoaderData, useParams } from "react-router-dom";

const CraftByCategory = () => {
  const { category } = useParams();
  const allCrafts = useLoaderData();
  //   console.log("craftByCategory", allCrafts);
  // const [craftByCategory, setCraftByCategory] = useState(allCrafts);

  const craftByCategory = allCrafts.filter(
    (craft) => craft.category === category
  );

  return (
    <div>
      <h2>
        Crafts in {category} category: {craftByCategory.length}
      </h2>
      {/* Render craftByCategory */}
      <ul>
        {craftByCategory.map((craft) => (
          <li key={craft._id}>
            <p>{craft.item_name}</p>
            <img src={craft.item_image} alt={craft.item_name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CraftByCategory;
