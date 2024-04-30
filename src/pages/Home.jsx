import { useLoaderData } from "react-router-dom";
import SixCraftCard from "../components/SixCraftCard";
import Catagories from "../components/Catagories";
import Banner from "../components/Banner";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  const crafts = useLoaderData();
  const sixCraft = crafts.slice(0, 6);
  // console.log(sixCraft);
  return (
    <div>
      {/* slider */}
      <Banner></Banner>
      <div>
        <About></About>
      </div>
      <div className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0 pt-12">
        <h2 className="font-bold text-3xl font-oregano text-custom-jute text-center pb-10">
          Popular Items
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {sixCraft.map((craft) => (
            <SixCraftCard key={craft._id} craft={craft}></SixCraftCard>
          ))}
        </div>
      </div>
      <div className="py-20">
        <Catagories></Catagories>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
