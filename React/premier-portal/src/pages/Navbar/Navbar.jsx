import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import { logout } from "../../Redux/Auth/ActionType";

function Navbar() {
  const { auth } = useSelector((store) => store);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  const navLinks = [
    { path: "/create-access-control-form", label: "Access Control Form" },
    { path: "/Create-Media-Disposal-Form", label: "Media Disposal Form" },
    { path: "/Create-sap-access-form", label: "SAP Access Form" },
    {
      path: "/Create-Security-Incident-Report",
      label: "Security Incident Report",
    },
    { path: "/Create-Asset-Handover-Report", label: "Asset Handover Report" },
    { path: "/Create-Change-Request-Form", label: "Change Request Form" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Premier Portal
        </Link>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Profile Avatar */}
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Avatar className="bg-blue-600">
                <AvatarFallback className="text-black">
                  {auth?.user?.fullName?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-gray-700 shadow-lg rounded-md mt-2">
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">
                Change Password
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="hover:bg-red-100 text-red-600 cursor-pointer"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Hamburger */}
          <button
            className="text-white focus:outline-none md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gradient-to-r from-gray-800 to-gray-900">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-white hover:text-blue-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Menu (optional) */}
      {/* You can uncomment this if you want top nav links in desktop view */}

      <div className="hidden md:flex justify-center space-x-6 py-2 bg-gray-900">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-sm font-medium text-white hover:text-blue-300 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

// Navigation Links

export default Navbar;
