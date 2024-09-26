import { UserButton } from "@clerk/nextjs";
import { Search, Menu } from "lucide-react";
import React from "react";

function Header({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <div className="p-5 shadow-sm border-b-2 bg-white flex justify-between items-center">
      <div className="flex items-center md:hidden">
        <Menu
          className="h-6 w-6 text-primary cursor-pointer mr-3"
          onClick={toggleMenu}
        />
      </div>
      <span className=" text-xl font-bold md:hidden">Quanta AI</span>

    
      <div className="hidden md:flex gap-2 bg-white items-center p-2 border rounded-md max-w-md">
        <Search />
        <input className="outline-none" type="text" placeholder="Search...." />
      </div>

  
      <div className="flex gap-5">
        <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2 hidden md:block">
          🔥 Join Membership just for $9.99/Month
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
