import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-custom-jute py-10">
      <div className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0">
        <h2 className="text-center text-4xl font-bold text-white font-oregano pt-6">
          WoodWoven
        </h2>
        <div className="flex  lg:flex-row flex-col items-center  text-center pt-10 space-y-12">
          {/*  */}
          <div className="text-white font-semibold space-y-2 lg:basis-1/3">
            <p className="underline">Contact Info</p>
            <p>+01 234 567</p>
            <p>mhnzbasit@gmail.com</p>
          </div>
          {/*  */}
          <div className="flex gap-3 lg:basis-1/3  justify-center ">
            <a
              href="https://www.facebook.com/meehnaazbasit"
              target="_blank"
              className="h-12 w-12 border-2 border-white rounded-full justify-center flex items-center text-white hover:text-custom-jute hover:bg-white transition-all"
            >
              <FaFacebookF className="text-3xl" />
            </a>
            <a
              href="https://www.facebook.com/meehnaazbasit"
              target="_blank"
              className="h-12 w-12 border-2 border-white rounded-full justify-center flex items-center text-white hover:text-custom-jute hover:bg-white transition-all"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://www.facebook.com/meehnaazbasit"
              target="_blank"
              className="h-12 w-12 border-2 border-white rounded-full justify-center flex items-center text-white hover:text-custom-jute hover:bg-white transition-all"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://www.facebook.com/meehnaazbasit"
              target="_blank"
              className="h-12 w-12 border-2 border-white rounded-full justify-center flex items-center text-white hover:text-custom-jute hover:bg-white transition-all"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>
          {/*  */}
          <div className="text-white lg:basis-1/3">
            <p>
              ©2024, WoodWoven. <br /> All rights reserved. Website by{" "}
              <a
                className="font-bold"
                href="https://www.facebook.com/meehnaazbasit"
                target="_blank"
              >
                Meehnaaz Basit
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
