import React, { useState } from "react";
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

  return (
    <nav className="bg-gray-200 w-full px-4 py-3 shadow-md mb-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold">
          Portal
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link to="/create-access-control-form" className="hover:underline">
            Create Access Form
          </Link>
          <Link to="/inbox" className="hover:underline">
            Inbox
          </Link>
          <Link to="/calendar" className="hover:underline">
            Calendar
          </Link>
        </div>

        {/* Profile Dropdown */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Avatar>
                <AvatarFallback>
                  {auth?.user?.name?.charAt(0) || "H"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Change Password</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Hamburger Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2">
          <Link to="/create-access-control-form" className="hover:underline">
            Create Access Form
          </Link>
          <Link to="/inbox" className="hover:underline">
            Inbox
          </Link>
          <Link to="/calendar" className="hover:underline">
            Calendar
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
