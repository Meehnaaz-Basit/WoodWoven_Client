import { useLoaderData } from "react-router-dom";
import SixCraftCard from "../components/SixCraftCard";
import Catagories from "../components/Catagories";

const Home = () => {
  const crafts = useLoaderData();
  const sixCraft = crafts.slice(0, 6);
  // console.log(sixCraft);
  return (
    <div>
      <h2>this is home page</h2>
      {/* <div className="flex">
        <div>
          <div className="w-96 h-96 bg-[#4A2C16]">deep brown</div>
          <div className="w-96 h-96 bg-[#8B4513]"></div>
          <div className="w-96 h-96 bg-[#B8860B]">dark beige</div>
          <div className="w-96 h-96 bg-[#333333]">dark gray</div>
          <div className="w-96 h-96 bg-[#228B22]">forest green</div>
          <div className="w-96 h-96 bg-[#556B2F]">olive green</div>
        </div>
      </div> */}
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
