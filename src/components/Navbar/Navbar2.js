import React, { useState } from "react";

export default function Navbar2(props) {
  const {
    navItems = [
      { name: "Home", link: "/" },
      { name: "Bikes", link: "/bikes" },
      { name: "Accessories", link: "/accessories" },
      { name: "About Us", link: "/about" },
      { name: "Contact Us", link: "/contact" },
    ],
    button1 = "/",
    button2 = "/bikes",
  } = props;

  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex items-center justify-between py-4 container">
      {/* <div className="flex items-center justify-start gap-6 font-medium text-sm"> */}
      <img src="/jutsu-avatar.png" alt="Jutsu" className="h-12" />

      <ul className="hidden md:flex gap-6 font-medium text-sm items-center">
        {navItems.map((item, index) => (
          <li>
            <a
              key={index}
              href={item.link}
              className="text-gray-700 hover:text-teal-600"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {/* </div> */}
      <i
        class="fa-solid fa-bars-staggered text-xl block md:hidden"
        onClick={() => setShowNav(true)}
      />
      <div className="hidden md:flex items-center justify-end gap-4">
        <button className="border border-teal-600 text-white rounded-2xl bg-teal-600 px-4 text-sm font-medium py-1">
          {button1}
        </button>
        <button className="border border-teal-600 px-4 rounded-2xl text-teal-600 text-sm font-medium py-1">
          {button2}
        </button>
      </div>
      <div
        className={`absolute transition-all duration-200 top-0 right-0 p-7 px-8 w-full bg-white border-b ${
          showNav ? "inline-block" : "hidden"
        }`}
      >
        <i
          class="fa-solid fa-xmark text-2xl text-right mr-6 w-full inline-block cursor-pointer"
          onClick={() => setShowNav(false)}
        />{" "}
        <ul className="flex flex-col gap-6 items-center justify-center">
          {navItems.map((item, index) => (
            <li>
              <a
                key={index}
                href={item.link}
                className="text-gray-700 hover:text-teal-600"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="flex items-center justify-end gap-4">
            <button className="border border-teal-600 text-white rounded-2xl bg-teal-600 px-4 text-sm font-medium py-1">
              {button1}
            </button>
            <button className="border border-teal-600 px-4 rounded-2xl text-teal-600 text-sm font-medium py-1">
              {button2}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
