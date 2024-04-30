import { Link } from "react-router-dom";
import Button from "./buttons/Button";

const About = () => {
  return (
    <div>
      <section>
        <div className="mx-auto  px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1  lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://i.ibb.co/KhdQf5K/photo-woodworker-carving-decorative-wooden-1056572-3756.png"
                  className="absolute inset-0 h-96 w-full object-contain"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-4xl font-bold font-oregano text-custom-jute ">
                  ABOUT US
                </h2>

                <p className="mt-8 text-gray-600">
                  Welcome to{" "}
                  <span className="font-bold text-custom-jute">WoodWoven</span>{" "}
                  ! We're passionate about blending wood and jute to create
                  unique, handcrafted pieces for your home. Our journey began
                  with a love for woodworking and a fascination with jute's
                  rustic charm. Each item is carefully crafted with attention to
                  detail and sustainability in mind. Explore our collection to
                  discover the beauty of handmade craftsmanship. Thank you for
                  supporting.!
                </p>
                <Link to="/all-items">
                  {" "}
                  <button className="mt-8">
                    <Button buttonText="View Items"></Button>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
