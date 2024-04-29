import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Button from "./buttons/Button";

const Nav = () => {
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
    <div className="container mx-auto max-w-[1300px] w-[90%] lg-w[88%] px-0 pb-0 ">
      {/*  */}
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <a
            href="/"
            className="text-4xl font-extrabold text-custom-jute font-oregano"
          >
            WoodWoven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end gap-4">
          {/*  */}
          {/* user profile image & register*/}
          {user ? (
            <div
              className="tooltip tooltip-bottom tooltip-accent  "
              data-tip={user.displayName}
            >
              {user.photoURL ? (
                <img
                  className="w-14 h-14 rounded-full border-2 border-custom-jute object-cover "
                  // title={user.displayName}
                  src={user.photoURL}
                  alt="Profile"
                />
              ) : (
                <img
                  data-aos="zoom-in"
                  className="w-10"
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
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Nav;
