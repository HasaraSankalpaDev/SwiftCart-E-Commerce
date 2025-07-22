"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import { useState, useContext } from "react";
import { AppContext } from "@/app/Context/AppContext";

const AdminNav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-1 border-b-gray-300 fixed top-0 w-full z-10 mb-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <a href={"/"} className="text-2xl font-semibold text-gray-900">
              <span className="text-[#FF5F15]">S</span>wiftCart.
            </a>

            {/* Nav Links */}
            <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
              {[
                { href: "/Admin/AllProducts", label: "All Products" },
                { href: "/Admin/AddProduct", label: "Add Product" },
                { href: "/Admin/EditProducts", label: "Edit Products" },
                { href: "/Admin/Messages", label: "Messages" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-lg hover:text-[#FF5F15] transition-all duration-300 ${
                    pathname === link.href ? "text-[#f98048]" : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="py-1 px-5 cursor-pointer outline-1 rounded-full">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24"></div>
    </>
  );
};

export default AdminNav;
