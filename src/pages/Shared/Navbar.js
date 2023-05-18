import React from "react";
import { AiFillContacts } from "react-icons/ai";
import { GiDoctorFace, GiNewspaper } from "react-icons/gi";
import { MdHome, MdMedicalServices } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import JdcLogo from "../../assets/logo/jddcLogo.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
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
            className="menu menu-compact dropdown-content mt-3 pl-0 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Services</NavLink>
            </li>
            <li>
              <NavLink to="/">Doctors</NavLink>
            </li>
            <li>
              <NavLink to="/">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/">News</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center justify-center gap-x-4">
          <img
            src={JdcLogo}
            alt="Joypurhat Diagnostic & Dialysis Centre"
            className="w-20 h-20"
          />
          <h1 className="text-2xl font-black text-white">JDDC</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-md font-black">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " underline underline-offset-8 underline-white " : ""
              }
            >
              <MdHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " underline underline-offset-8 underline-white " : ""
              }
            >
              <MdMedicalServices />
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " underline underline-offset-8 underline-white " : ""
              }
            >
              <GiDoctorFace />
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " underline underline-offset-8 underline-white " : ""
              }

            >
              <AiFillContacts />
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " underline underline-offset-8 underline-white " : ""
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " underline underline-offset-8 underline-white " : ""
              }
            >
              <GiNewspaper />
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " underline underline-offset-8 underline-white " : ""
              }
            >
              <AiFillContacts />
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
