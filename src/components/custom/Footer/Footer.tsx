"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agreeToPrivacy: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <footer className="w-full p-3 sm:p-8 bg-[radial-gradient(ellipse_at_30%_80%,_#a1c935,_#009245,_#00753b)]">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20"></div>

          {/* Content wrapper with relative positioning */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Section - Logo and Newsletter */}
              <div className="lg:col-span-6 space-y-8">
                {/* Logo */}
                <div className="flex items-center">
                  <div className="bg-white  px-4 py-1">
                    <Image
                      src={"/assets/logo.png"}
                      alt="logo"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>

                {/* Newsletter Section */}
                <div className="space-y-6">
                  <h3 className="text-white text-xl md:text-2xl font-medium leading-relaxed">
                    Want to receive no-code &<br />
                    news and updates?
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white max-w-sm px-4 py-3 rounded-xl border-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white max-w-sm px-4 py-3 rounded-xl border-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeToPrivacy"
                        id="privacy-checkbox"
                        checked={formData.agreeToPrivacy}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="privacy-checkbox"
                        className="text-white text-sm"
                      >
                        I agree with the{" "}
                        <a href="#" className="underline hover:no-underline">
                          privacy statement
                        </a>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="bg-white text-gray-800 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Section - Links */}
              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
                {/* Services Column */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-lg">Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        Build
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        Automate
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        No-code
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Company Column */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-lg">Company</h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Legal Column */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-lg">Legal</h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        Acceptable Use
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/terms-and-condition"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm text-center">
                COPYRIGHT © 2025 PARAFIT INDIA LLP | DESIGNED & DEVELOPED BY
                CLAPONN INFOTECH
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
