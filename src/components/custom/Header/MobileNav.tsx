"use client";
import { NavItem } from "@/types";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  navItems: NavItem[];
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const MobileNav: React.FC<Props> = ({
  navItems,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const pathname = usePathname();
  console.log("🚀 ~ MobileNav ~ pathname:", pathname)

  return (
    <div
      className={`md:hidden transition-all duration-300 ease-in-out z-50 ${
        isMenuOpen
          ? "h-fit opacity-100 pb-4"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-200  ">
        {navItems.map(
          (item, index) =>
            item.type === "text" && (
              <Link
                key={item.name + index}
                href={item.href}
                className={`px-3 py-3 text-base transition-colors duration-200 rounded-lg font-medium
                  ${
                    pathname === item.href
                      ? "text-[#009245] font-bold"
                      : "text-gray-700 hover:text-[#009245] hover:bg-gray-50"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
