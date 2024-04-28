import { useLoaderData } from "react-router-dom";
import SixCraftCard from "../components/SixCraftCard";
import Catagories from "../components/Catagories";
import CraftByCategory from "../components/CraftByCategory";

const Home = () => {
  const crafts = useLoaderData();
  const sixCraft = crafts.slice(0, 6);
  // console.log(sixCraft);
  return (
    <div>
      <h2>this is home page</h2>
      {/* slider */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {sixCraft.map((craft) => (
          <SixCraftCard key={craft._id} craft={craft}></SixCraftCard>
        ))}
      </div>
      <div>
        <Catagories></Catagories>
      </div>
    </div>
  );
};

export default Home;
