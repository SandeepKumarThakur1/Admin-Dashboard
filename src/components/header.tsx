"use client";

import { Menu } from "lucide-react";
import Button from "./ui/Button";
import Dropdown from "./ui/Dropdown";
import { FaUser } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-white dark:bg-[var(--sideBarColor)] p-4 flex justify-between items-center">
      {/* Hamburger Button */}
      <Button onClick={toggleSidebar}>
        <Menu size={24} />
      </Button>

      {/* Profile Dropdown */}
      <Dropdown
        label={<FaUser />}
        items={[
          {
            name: (
              <div className="flex gap-2 items-center">
                <LuUserRound className="mb-0" />
                <div>Profile</div>
              </div>
            ),
            onClick: () => console.log("Profile Clicked"),
          },
          {
            name: (
              <div className="flex gap-2 items-center">
                <IoSettingsOutline className="mb-0" />
                <div>Settings</div>
              </div>
            ),
            onClick: () => console.log("Settings Clicked"),
          },
          {
            name: (
              <div className="flex gap-2 items-center">
                <IoMdLogOut className="mb-0 text-red-500" />
                <div className="text-red-500">Logout</div>
              </div>
            ),
            onClick: () => console.log("Logged Out"),
          },
        ]}
      />
    </header>
  );
};

export default Header;
