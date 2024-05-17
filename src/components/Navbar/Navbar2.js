import { useState } from "react";

export default function Navbar2({ props }) {
  const {
    navItems = [
      { name: "Home", link: "#" },
      { name: "Bikes", link: "#" },
      { name: "Accessories", link: "#" },
      { name: "About Us", link: "#" },
      { name: "Contact Us", link: "#" },
    ],
    button = "BUY",
  } = props;

  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="relative bg-white dark:bg-slate-950">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        <img
          src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Black%20Jutsu.png"
          alt="Jutsu"
          className="h-8 inline-block dark:hidden"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/White%20Jutsu.png"
          alt="Jutsu"
          className="h-8 hidden dark:inline-block"
        />

        <ul className="hidden text-sm font-medium items-center gap-6 lg:flex">
          {navItems.map((item, index) => (
            <li>
              <a
                key={index}
                href={item.link}
                className="text-nowrap text-gray-700 dark:text-gray-200 hover:text-teal-600"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* </div> */}
        <i
          class="fa-solid fa-bars-staggered block text-black dark:text-gray-200 text-xl lg:hidden"
          onClick={() => setShowNav(true)}
        />

        <button className="hidden text-nowrap rounded-2xl bg-teal-600  px-4 py-1 text-sm font-medium text-white lg:block">
          {button}
        </button>

        <div
          className={`absolute right-0 top-0 w-full border-b dark:border-gray-700 bg-white dark:bg-slate-900 p-7 px-8 transition-all duration-200 ${
            showNav ? "inline-block" : "hidden"
          }`}
        >
          <i
            class="fa-solid fa-xmark mr-6 inline-block w-full cursor-pointer text-right text-2xl text-black dark:text-gray-200"
            onClick={() => setShowNav(false)}
          />{" "}
          <ul className="flex flex-col  items-center justify-center gap-6">
            {navItems.map((item, index) => (
              <li>
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-600"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <button className="text-nowrap rounded-2xl bg-teal-600 px-4 py-1 text-sm font-medium text-white block">
              {button}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
