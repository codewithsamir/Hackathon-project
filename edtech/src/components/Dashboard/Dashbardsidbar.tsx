"use client";
import React from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define types for sidebar menu items
interface MenuItem {
  path: string;
  label: string;
  icon: JSX.Element;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const pathname = usePathname(); // Get the current path

  const isActive = (path: string) => {
    // For dynamic matching of active paths
    return pathname?.startsWith(path) ? "black" : "#000000a8"; // Highlight active link based on startsWith
  };

  return (
    <div className="w-[400px] h-[90vh] bg-white shadow-md p-6">
      <List>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path} passHref>
            <ListItemButton
              sx={{
                color: "white",
                mb: 2,
                borderRadius: 2,
                bgcolor: `${isActive(item.path)}`,
                "&:hover": { bgcolor: "black", color: "white" },
              }}
              className="bg-black"
            >
              <ListItemIcon sx={{ color: "white" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} sx={{ color: "white" }} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
