import React from "react";

export default function Navbar1(props) {
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

  return (
    <nav className="flex items-center justify-between py-6 container">
      <div className="flex items-center justify-start gap-6 font-medium text-sm">
        <img src="/jutsu-avatar.png" alt="Jutsu" className="h-12" />

        <ul className="flex gap-6 items-center">
          {navItems.map((item, index) => (
            <li>
              <a
                key={index}
                href={item.link}
                className="text-gray-700 hover:text-orange-700"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-end gap-4">
        <button className="border-[1px] border-orange-700 text-white rounded-2xl bg-orange-700 px-4 text-sm font-medium py-1">
          {button1}
        </button>
        <button className="border-[1px] border-orange-700 px-4 rounded-2xl text-orange-700 text-sm font-medium py-1">
          {button2}
        </button>
      </div>
    </nav>
  );
}
