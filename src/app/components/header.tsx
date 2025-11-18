


"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | false>(false);

  // Navigation Links (except Contact)
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "COMPANY", href: "/about" },
    {
      name: "SOLUTIONS",
      href: "/solutions",
      dropdown: [
        { name: "Custom Exhibition Stands", href: "/solutions/custom" },
        { name: "Modular Exhibition Stands", href: "/solutions/modular" },
        { name: "Double Decker Exhibition Stands", href: "/solutions/double-decker" },
        { name: "Expo Pavilion Exhibition Stands", href: "/solutions/country" },
        { name: "Portable Exhibition Stands", href: "/solutions/portable" },
      ],
    },
    {
      name: "OUR PRESENCE",
      href: "",
      dropdown: [
        { name: "India", href: "" },
        { name: "Germany", href: "" },
        { name: "Dubai (UAE)", href: "" },
        { name: "United States", href: "https://dazzle-us.vercel.app/" },
        { name: "Europe", href: "" },
      ],
    },
    { name: "PORTFOLIO", href: "/portfolio" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FCFBF5] z-50 shadow-sm lg:px-[60px] px-[20px]">
      <div className="flex justify-between items-center py-3">

        {/* === Logo (Left) === */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/logo.png"
            className="lg:w-45 w-30"
            alt="Dazzle Exhibitions & Events"
            width={1830}
            height={750}
            priority
          />
        </Link>

        {/* === Desktop Navigation (Centered) === */}
        <nav className="hidden lg:flex flex-1 justify-center relative">
          <ul className="flex justify-center gap-8 md:gap-10 m-0 p-0">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setHoveredDropdown(link.name)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`text-[13px] font-semibold tracking-wide flex items-center gap-1 transition-colors duration-200 ${pathname === link.href
                    ? "!text-[#818181]"
                    : "text-black hover:text-gray-600"
                    }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && hoveredDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 bg-[#FCFBF5] shadow-md border rounded-lg py-2 min-w-[250px]">
                    {link.dropdown.map((drop) => (
                      <Link
                        key={drop.href}
                        href={drop.href}
                        className="block px-4 py-2 text-sm text-black no-underline hover:bg-gray-100"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* === Contact Button (Right) === */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="px-4 py-2.5 bg-black text-white text-[13px] font-semibold rounded-full hover:bg-gray-800 transition"
          >
            CONTACT US
          </Link>
        </div>

        {/* === Mobile Menu Button === */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-black focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* === Mobile Sidebar === */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black lg:hidden z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-[#FCFBF5] shadow-lg z-50 p-6 flex flex-col overflow-y-auto"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end text-gray-700 mb-6"
              >
                <X size={26} />
              </button>

              {/* Mobile Links */}



              <div className=" lg:pt-[0px] pt-[10px]">
                <ul className="flex flex-col gap-4 ">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      {link.dropdown ? (
                        <>
                          <button
                            className="flex justify-between items-center w-full text-left text-[15px] font-semibold text-black"
                            onClick={() =>
                              setMobileDropdownOpen(
                                mobileDropdownOpen === link.name ? false : link.name
                              )
                            }
                          >
                            {link.name}
                            <ChevronDown
                              className={`transition-transform ${mobileDropdownOpen === link.name ? "rotate-180" : ""
                                }`}
                              size={16}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileDropdownOpen === link.name && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-3 mt-2 flex flex-col gap-2 border rounded-lg p-3 border-gray-200"
                              >
                                {link.dropdown.map((drop) => (
                                  <li key={drop.href}>
                                    <Link
                                      href={drop.href}
                                      onClick={() => {
                                        setMenuOpen(false);
                                        setMobileDropdownOpen(false);
                                      }}
                                      className="block text-sm text-black no-underline hover:bg-gray-100 px-2 py-1 rounded"
                                    >
                                      {drop.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`block text-[15px] font-semibold ${pathname === link.href
                            ? "!text-[#818181]"
                            : "text-black hover:text-gray-600"
                            }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}

                  {/* Contact Button in Mobile */}
                  <li>
                    <Link
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="block mt-4 text-center px-3 py-2.5 bg-black text-white rounded-full"
                    >
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;


