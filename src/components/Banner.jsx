import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Button from "./buttons/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        cssMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="relative ">
            <div
              className="bg-cover bg-center w-full  relative flex justify-center items-center"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/KhdQf5K/photo-woodworker-carving-decorative-wooden-1056572-3756.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "90vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              {/* content */}
              <div className="absolute text-center space-y-4 text-white z-10 ">
                <h1 className="lg:text-6xl font-bold text-custom-jute uppercase">
                  Artistry in Every Detail
                </h1>
                <p className="text-xl mb-6">
                  Explore Our Handcrafted Wooden Furniture
                </p>
                <Link to="/all-items">
                  {" "}
                  <button>
                    <Button buttonText="View All"></Button>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <div className="relative">
            <div
              className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/XLqSQL8/basket-weaving-photo-artisan-creating-natural-craft-840347-2351.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "90vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              {/* content */}
              <div className="absolute space-y-4 text-center text-white z-10">
                <h1 className="lg:text-6xl font-bold text-custom-jute uppercase">
                  Embrace Natural Elegance
                </h1>
                <p className="text-xl mb-6">
                  {" "}
                  Discover the Beauty of Jute Home Decor
                </p>
                <Link to="/all-items">
                  {" "}
                  <button>
                    <Button buttonText="View All"></Button>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <div className="relative">
            <div
              className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
              style={{
                backgroundImage: "url(https://i.ibb.co/xGPf5x6/99849.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "90vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              {/* content */}
              <div className="absolute space-y-4 text-center text-white z-10">
                <h1 className="lg:text-6xl font-bold text-custom-jute uppercase">
                  Crafted to Perfection
                </h1>
                <p className="text-xl mb-6">
                  Explore Our Handcrafted Wooden Furniture
                </p>
                <Link to="/all-items">
                  {" "}
                  <button>
                    <Button buttonText="View All"></Button>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* ******************************** */}
      {/* 1 */}
      {/* <div className="relative">
        <div
          className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/mvcrJGs/pexels-binyamin-mellish-1396132.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "80vh",
            backgroundRepeat: "no-repeat",
          }}
        >
        
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
         
          <div className="absolute text-center text-white z-10">
            <h1>HEADING</h1>
            <p>subheading</p>
            <button className="btn">View Property</button>
          </div>
        </div>
      </div> */}
      {/*  */}
    </div>
  );
};

export default Banner;
