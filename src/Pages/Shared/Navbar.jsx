import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-xl font-extrabold uppercase text-white">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white">
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white">
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Our Shop
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white">
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          Cart
        </NavLink>
      </li>
      <li className="text-xl font-extrabold uppercase text-white">
        <NavLink
          to="/signIn"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#EEFF25]" : "undefined"
          }
        >
          SignIn
        </NavLink>
      </li>
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
                stroke="currentColor"
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
              className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="text-xl uppercase text-white">
            <p className="font-bold">Bistro Boss</p>
            <p className="tracking-widest">restaurant</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-7">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
