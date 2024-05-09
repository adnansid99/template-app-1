import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 container">
      <div className="flex items-center justify-start gap-6  font-medium text-sm">
        <img src="/jutsu-avatar.png" alt="Jutsu" className="h-12" />
        <p>Home</p>
        <p>Bikes</p>
        <p>Accessories</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <div className="flex items-center justify-end gap-4">
        <button className="border-[1px] border-orange-700 text-white rounded-2xl bg-orange-700 px-4 text-sm font-medium py-1">
          /
        </button>
        <button className="border-[1px] border-orange-700 px-4 rounded-2xl text-orange-700 text-sm font-medium py-1">
          /bikes
        </button>
      </div>
    </nav>
  );
}
