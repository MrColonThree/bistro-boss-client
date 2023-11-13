import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li className="text-xl font-extrabold uppercase text-white hover:text-[#EEFF25]">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white hover:text-[#EEFF25]">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white hover:text-[#EEFF25]">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white hover:text-[#EEFF25]">
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white hover:text-[#EEFF25]">
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Our Shop
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white hover:text-[#EEFF25]">
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Cart
        </NavLink>
      </li>
      {/* {!user && (
        <li className="lg:hidden text-xl font-extrabold uppercase text-white hover:text-[#EEFF25]">
          <NavLink
            to="/signIn"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
            }
          >
            Sign In
          </NavLink>
        </li>
      )} */}
    </>
  );
  return (
    <>
      <div className="navbar bg-opacity-30 fixed z-10 bg-black max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-50 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className=" uppercase text-white">
            <p className="font-bold text-2xl">Bistro Boss</p>
            <p className="tracking-[3.5px] text-xl">restaurant</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-7">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                className="md:text-xl font-extrabold uppercase bg-[#EEFF25] px-2  py-1 rounded-xl hover:text-white hover:bg-lime-500"
                onClick={handleLogOut}
              >
                Log Out
              </button>
              <img
                className="h-12 w-12 rounded-full ml-2"
                src={user.photoURL}
                alt=""
              />
            </>
          ) : (
            <Link to="/signIn">
              <button className="md:text-xl font-extrabold uppercase bg-[#EEFF25] px-2 md:px-4 py-1 rounded-xl hover:text-white hover:bg-lime-500">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
