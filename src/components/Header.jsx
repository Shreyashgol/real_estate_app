import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-red-50 m-0 caret-amber-300 flex justify-between items-center p-8">
        <navbar>
          <ul className="flex flex-row gap-4 p-0 m-0 text-3xl justify-between items-center">
            <li className="list-none text-black font-semibold antialiased font-stretch-extra-condensed underline decoration-1">
              Home
            </li>
            <li className="list-none text-black font-semibold antialiased font-stretch-extra-condensed underline decoration-1">
              About
            </li>
            <li className="list-none text-black font-semibold antialiased font-stretch-extra-condensed underline decoration-1">
              Services
            </li>
            <li className="list-none text-black font-semibold antialiased font-stretch-extra-condensed underline decoration-1">
              Contact
            </li>
          </ul>
        </navbar>
        Header
      </div>
    </>
  );
};

export default Header;
