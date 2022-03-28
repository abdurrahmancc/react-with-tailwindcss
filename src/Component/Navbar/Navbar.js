import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 24, name: "Home", link: "/home" },
    { id: 22, name: "Contact", link: "/contact" },
    { id: 224, name: "Product", link: "/product" },
    { id: 234, name: "Login", link: "/login" },
  ];
  return (
    <div className="bg-indigo-300">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`text-3xl md:flex justify-center md:static w-full bg-indigo-300 absolute duration-500 ease-in ${
          open ? "top-6" : "top-[-150px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} name={route.name} link={route.link}></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
