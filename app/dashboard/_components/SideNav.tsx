"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import Link from "next/link";

function SideNav({ onMenuClick }: { onMenuClick?: () => void }) {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  });

  return (
    <div className="h-screen relative p-2 shadow-sm border bg-white">
      <div className="flex justify-center ">
        <span className="text-3xl font-bold">Quanta AI</span>
        {/* <Image src={"/logo2.png"} alt="logo" width={100} height={100} /> */}
      </div>
      <hr className="my-7 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path} onClick={onMenuClick} passHref>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center 
              ${path == menu.path && "bg-primary text-white"}
          `}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-sm">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-3 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
