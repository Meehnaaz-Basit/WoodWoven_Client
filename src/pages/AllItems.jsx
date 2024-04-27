import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";

const AllItems = () => {
  const allCrafts = useLoaderData();
  return (
    <div>
      <h2>all crafts all {allCrafts.length}</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {allCrafts.map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
