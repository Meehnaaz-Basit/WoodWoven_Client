import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navMenu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "border-2 border-orange-500 text-white bg-orange-500 py-2 px-3 mx-2  rounded-lg font-semibold"
            : "border-2 border-transparent py-2 px-3 mx-2  rounded-lg font-semibold hover:border-orange-500 hover:text-white hover:bg-orange-500 transition-all"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/all-items"
        className={({ isActive }) =>
          isActive
            ? "border-2 border-orange-500 text-white bg-orange-500 py-2 px-3 mx-2  rounded-lg font-semibold"
            : "border-2 border-transparent py-2 px-3 mx-2  rounded-lg font-semibold hover:border-orange-500 hover:text-white hover:bg-orange-500 transition-all"
        }
      >
        All Art & craft Items
      </NavLink>

      <NavLink
        to="/add-cardItems"
        className={({ isActive }) =>
          isActive
            ? "border-2 border-orange-500 text-white bg-orange-500 py-2 px-3 mx-2  rounded-lg font-semibold"
            : "border-2 border-transparent py-2 px-3 mx-2  rounded-lg font-semibold hover:border-orange-500 hover:text-white hover:bg-orange-500 transition-all"
        }
      >
        Add Craft Item
      </NavLink>
      <NavLink
        to="/my-craft"
        className={({ isActive }) =>
          isActive
            ? "border-2 border-orange-500 text-white bg-orange-500 py-2 px-3 mx-2  rounded-lg font-semibold"
            : "border-2 border-transparent py-2 px-3 mx-2  rounded-lg font-semibold hover:border-orange-500 hover:text-white hover:bg-orange-500 transition-all"
        }
      >
        My Art&Craft List
      </NavLink>
    </>
  );
  return (
    <div>
      {/*  */}
      <div className="navbar bg-base-100">
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
          <a className="btn btn-ghost text-xl">WoodWoven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Nav;
