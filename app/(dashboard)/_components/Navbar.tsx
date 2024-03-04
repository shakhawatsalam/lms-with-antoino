import React from "react";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center shadow-sm'>
      <MobileSideBar />
    </div>
  );
};

export default Navbar;
