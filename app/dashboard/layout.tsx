"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { Sheet, SheetContent } from "@/components/ui/sheet";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <div className="bg-slate-100 w-full min-h-screen">
        {/* Mobile Navigation - Should be the only SideNav for small screens */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent side="left" className="p-0">
              <SideNav onMenuClick={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden md:block fixed md:w-64">
          <SideNav />
        </div>

        {/* MAIN CONTENT */}
        <div className="md:ml-64">
          <Header toggleMenu={() => setIsOpen(true)} />
          <main>{children}</main>
        </div>
      </div>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
