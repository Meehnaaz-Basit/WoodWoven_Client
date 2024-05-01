import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Button from "./buttons/Button";
import { Tooltip } from "react-tooltip";

const Nav = () => {
  // const [theme, setTheme] = useState("light");
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);
  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("luxury");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  const [theme, setTheme] = useState(null); // Set initial theme to null

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      document.querySelector("html").setAttribute("data-theme", localTheme);
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? "luxury" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const navMenu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " border-b-2 border-custom-jute text-custom-jute bg-transparent py-2 px-3 mx-2  font-semibold"
            : "border-b-2 border-transparent text-custom-jute py-2 px-3 mx-2 font-semibold hover:border-custom-jute hover:text-custom-jute hover:bg-transparent transition-all"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/all-items"
        className={({ isActive }) =>
          isActive
            ? " border-b-2 border-custom-jute text-custom-jute bg-transparent py-2 px-3 mx-2  font-semibold"
            : "border-b-2 border-transparent text-custom-jute py-2 px-3 mx-2 font-semibold hover:border-custom-jute hover:text-custom-jute hover:bg-transparent transition-all"
        }
      >
        All Art & craft Items
      </NavLink>

      <NavLink
        to="/add-cardItems"
        className={({ isActive }) =>
          isActive
            ? " border-b-2 border-custom-jute text-custom-jute bg-transparent py-2 px-3 mx-2  font-semibold"
            : "border-b-2 border-transparent text-custom-jute py-2 px-3 mx-2 font-semibold hover:border-custom-jute hover:text-custom-jute hover:bg-transparent transition-all"
        }
      >
        Add Craft Item
      </NavLink>
      <NavLink
        to="/my-craft"
        className={({ isActive }) =>
          isActive
            ? " border-b-2 border-custom-jute text-custom-jute bg-transparent py-2 px-3 mx-2  font-semibold"
            : "border-b-2 border-transparent text-custom-jute py-2 px-3 mx-2 font-semibold hover:border-custom-jute hover:text-custom-jute hover:bg-transparent transition-all"
        }
      >
        My Art&Craft List
      </NavLink>
    </>
  );
  return (
    <div className="container mx-auto max-w-[1300px] w-[100%] lg-w[88%] px-0 pb-0 ">
      {/*  */}
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn p-1 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-40 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <a
            href="/"
            className="lg:text-4xl text-xl font-extrabold text-custom-jute font-oregano"
          >
            WoodWoven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end lg:gap-4 gap-1">
          {/*  */}
          {/* user profile image & register*/}
          {user ? (
            <div
              className="tooltip tooltip-bottom tooltip-accent z-40  "
              data-tip={user.displayName}
            >
              {user.photoURL ? (
                <img
                  className="lg:w-14 lg:h-14 rounded-full border-2 border-custom-jute object-cover "
                  // title={user.displayName}
                  src={user.photoURL}
                  alt="Profile"
                />
              ) : (
                <img
                  className="lg:w-10 w-6"
                  src="https://i.ibb.co/X3yrLFJ/pngegg.png"
                  alt=""
                />
              )}
            </div>
          ) : (
            <Link
              to="/register"
              // className="btn border-2  bg-transparent hover:text-white "
            >
              <Button buttonText="Register"></Button>
            </Link>
          )}
          {/* login and logout */}
          {user ? (
            // <button onClick={handleLogOut} className="btn text-white font-bold">
            //   LogOut
            // </button>
            <Link onClick={handleLogOut}>
              <Button buttonText="LogOut" onClick={handleLogOut}></Button>
            </Link>
          ) : (
            // <Link to="/login" className="btn  text-white font-bold">
            //   Login
            // </Link>
            <Link to="/login">
              <Button buttonText="Login"></Button>
            </Link>
          )}
          {/*  */}
          {/* <Link to="/login" className="btn">
            Login
          </Link> */}
          {/* <Link to="/register" className="btn">
            Register
          </Link> */}
          {/* {theme !== null && (
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleToggle}
                type="checkbox"
                checked={theme === "luxury"}
                // value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          )} */}
        </div>
        {/*  */}
        <a id="clickable" className="z-30">
          {theme !== null && (
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleToggle}
                type="checkbox"
                checked={theme === "luxury"}
                // value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          )}
        </a>
        <Tooltip anchorSelect="#clickable" className="z-40" clickable>
          <button>Change theme</button>
        </Tooltip>
        {/*  */}
      </div>
      {/*  */}

      {/*  */}
    </div>
  );
};

export default Nav;
