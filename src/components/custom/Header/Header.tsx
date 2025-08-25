"use client";
import React, { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";

import { navItems } from "@/lib/navItems";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-white sticky top-0 z-100 w-[100vw]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 md:h-20">
          <DesktopNav navItems={navItems} />
          <Link
            className="flex-shrink-0 md:hidden absolute left-5"
            href={'/'}
          >
            <Image src={'/assets/logo.png'} alt="logo" height={100} width={100} />
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="absolute right-5 top-5 text-gray-700 hover:text-[#009245] focus:outline-none focus:text-[#009245] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <MobileNav
          navItems={navItems}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
