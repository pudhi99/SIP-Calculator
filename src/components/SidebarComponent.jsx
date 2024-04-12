"use client";
import { Button, Sidebar } from "flowbite-react";
import React from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineXCircle,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { MdOutlineSip } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
function SidebarComponent() {
  const pathName = usePathname();
  return (
    <Sidebar
      className="fixed top-0 left-0 h-screen "
      aria-label="Default sidebar example"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} href="/" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>

          <Sidebar.Item as={Link} href="/" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            as={Link}
            href="sip-calculator"
            className={`${pathName === "/sip-calculator" ? "bg-gray-700" : ""}`}
            icon={MdOutlineSip}
            label="Pro"
            labelColor="dark"
          >
            SIP Calculator
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiInbox} label="3">
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent;
