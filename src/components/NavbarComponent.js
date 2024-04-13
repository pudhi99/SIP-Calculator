import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { usePathname } from "next/navigation";
function NavbarComponent(props) {
  const pathName = usePathname();
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          width={20}
          height={10}
          src="/next.svg"
          className="mr-3 w-16 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {props.isMobile ? (
          <NavbarCollapse>
            <NavbarLink as={Link} href="/" className="">
              Dashboard
            </NavbarLink>
            <NavbarLink
              as={Link}
              href="/sip-calculator"
              className={`${
                pathName === "/sip-calculator" ? "bg-gray-700" : ""
              }`}
            >
              SIP Calculator
            </NavbarLink>
          </NavbarCollapse>
        ) : (
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink as={Link} href="#">
              About
            </NavbarLink>
            <NavbarLink href="#">Services</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarCollapse>
        )}
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComponent;
