import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-[2rem] bg-green-900 text-white">
        <div>
          <h2 className="text-4xl font-bold font-sans text-yellow-500">
            JENNY SPECIAL
          </h2>
        </div>
        <div>
          <ul className="flex justify-between gap-8">
            <li className="font-bold text-lg cursor-pointer hover:text-yellow-300">
              HOME
            </li>
            <li className="font-bold text-lg cursor-pointer hover:text-yellow-300">
              RESERVATION
            </li>

            <li className="font-bold text-lg cursor-pointer hover:text-yellow-300">
              CONTACT
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
