"use client";
import React from "react";
import Image from "next/image";
import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  navItems: NavItem[];
}

const DesktopNav: React.FC<Props> = ({ navItems }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex space-x-0 xl:space-x-8 overflow-hidden z-50">
     
      {navItems.map((item, index) =>
        item.type === "text" ? (
          <Link
            key={item.name + index}
            href={item.href}
            className={`px-3 py-2 text-sm transition-colors duration-200 text-center relative group ${
              pathname === item.href
                ? "font-bold text-[#009245]"
                : "text-gray-700 font-medium hover:text-[#009245]"
            }`}
          >
            {item.name}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#009245] transition-all duration-300
                ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
            ></span>
          </Link>
        ) : (
          <Link
            key={item.name + index}
            className="flex-shrink-0 flex items-center"
            href={item.href}
          >
            <Image src={item.src} alt="logo" height={100} width={100} />
          </Link>
        )
      )}
      
    </nav>
  );
};

export default DesktopNav;
