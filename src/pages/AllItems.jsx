import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";
import { useState } from "react";

const AllItems = () => {
  const allCrafts = useLoaderData();
  const [serialNumber, setSerialNumber] = useState(1);
  return (
    <div className="">
      <h2 className="text-center text-3xl text-custom-jute font-bold font-oregano py-6">
        All Crafts
      </h2>
      <div className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0 py-6">
        {/*  */}

        <div className="overflow-x-auto">
          <table className="table table-zebra text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Sl.No.</th>
                <th>Items Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Creator</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {/*  */}

              {allCrafts.map((craft, index) => (
                <CraftCard
                  key={craft._id}
                  craft={craft}
                  serialNumber={serialNumber + index}
                ></CraftCard>
              ))}
            </tbody>
          </table>
        </div>

        {/*  */}
        {/* {allCrafts.map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))} */}
      </div>
    </div>
  );
};

export default AllItems;
